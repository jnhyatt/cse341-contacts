import mongoClient from "../config/db.js";
import { ObjectId } from "mongodb";
import contactSchema from "../validators/contact.schema.js";

export async function createContact(req, res) {
    try {
        const { error } = contactSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        await mongoClient.db("contacts").collection("contacts").insertOne(req.body);
        res.status(201).send("Contact created");
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function updateContact(req, res) {
    const id = new ObjectId(req.params.id);
    try {
        const { error } = contactSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        await mongoClient.db("contacts").collection("contacts").updateOne({ _id: id }, { $set: req.body });
        res.send("Contact updated");
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function getContactById(req, res) {
    const id = new ObjectId(req.params.id);
    try {
        res.json(await mongoClient.db("contacts").collection("contacts").findOne({ _id: id }));
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function deleteContact(req, res) {
    const id = new ObjectId(req.params.id);
    try {
        await mongoClient.db("contacts").collection("contacts").deleteOne({ _id: id });
        res.send("Contact deleted");
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function getAllContacts(req, res) {
    try {
        res.json(await mongoClient.db("contacts").collection("contacts").find().toArray());
    } catch (err) {
        res.status(500).send(err);
    }
}
