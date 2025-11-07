import mongoClient from "../db/connect.js";
import { ObjectId } from "mongodb";

export async function getAllContacts(req, res) {
    try {
        res.json((await mongoClient.db("contacts").collection("contacts").find().toArray()));
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function getContactById(req, res) {
    const id = new ObjectId(req.params.id);
    try {
        res.json((await mongoClient.db("contacts").collection("contacts").findOne({ _id: id })));
    } catch (err) {
        res.status(500).send(err);
    }
}
