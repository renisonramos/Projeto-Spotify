import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");

  // Garante que durationInSecond seja calculado apenas uma vez e que duration não seja undefined
  const [durationInSecond, setDurationInSecond] = useState(
    duration ? timeInSeconds(duration) : 0
  );

  useEffect(() => {
    if (duration) {
      setDurationInSecond(timeInSeconds(duration));
    }
  }, [duration]);

  const playPause = () => {
    if (audioPlayer.current) {
      isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
      setIsPlaying(!isPlaying);
    } else {
      console.warn("audioPlayer.current is null");
    }
  };

  useEffect(() => {
    let intervalId;
    if (isPlaying && audioPlayer.current) {
      intervalId = setInterval(() => {
        const currentTimeSeconds = audioPlayer.current.currentTime;
        setCurrentTime(formatTime(currentTimeSeconds));
        const progress = (currentTimeSeconds / durationInSecond) * 100;

        // Imprima os valores para debug
        console.log("currentTimeSeconds:", currentTimeSeconds);
        console.log("durationInSecond:", durationInSecond);
        console.log("progress:", progress);

        // Verifique se progressBar.current existe antes de usá-lo
        if (progressBar.current) {
          progressBar.current.style.setProperty("--_progress", `${progress}%`);
        } else {
          console.warn("progressBar.current is null");
        }
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, durationInSecond]);

  useEffect(() => {
    console.log("audioPlayer.current:", audioPlayer.current);
  }, [audio]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
        />
        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
