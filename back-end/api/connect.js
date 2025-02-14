// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://cauafariasdev:eCjymS5xCNfPdOGn@cluster0.dhtco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("Spotify_Replica");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
