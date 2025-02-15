// Java Script Assincrono
// await async

import {MongoClient} from "mongodb";

const URI =
  "mongodb+srv://renisonramos:R4t57ZhJs1LmvML7@cluster0.s2ivp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  const client = new MongoClient(URI);

  export const db = client.db("projetoSpotify")


  // const songCollection = await db.collection("songs").find({}).toArray();

  // console.log(songCollection);