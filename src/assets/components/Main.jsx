import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../database/artists";
import { songsArray } from "../database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* ItemList de Artistas */}
      <ItemList
        title="Artistas"
        items={5}
        itemsArray={artistArray}
        path="/artists"
        idPath="artist"
      />

      {/* ItemList de Músicas */}
      <ItemList
        title="Músicas"
        items={14}
        itemsArray={songsArray}
        path="/songs"
        idPath="song"
      />
    </div>
  );
};

export default Main;
