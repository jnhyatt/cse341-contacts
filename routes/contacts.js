import express from "express";
import { getAllContacts, getContactById } from "../controllers/contactsController.js";

const router = express.Router();

router.get("/all", getAllContacts);
router.get("/id/:id", getContactById);

export default router;
