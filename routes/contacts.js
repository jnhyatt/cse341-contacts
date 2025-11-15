import express from "express";
import {
    createContact,
    updateContact,
    getContactById,
    deleteContact,
    getAllContacts,
} from "../controllers/contactsController.js";

const router = express.Router();

/**
 * @openapi
 * /contacts:
 *   post:
 *     tags: [Contacts]
 *     summary: Create a new contact
 *     description: Creates a new contact with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: Contact created successfully
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Contact created"
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post("/", createContact);
/**
 * @openapi
 * /contacts/{id}:
 *   put:
 *     tags: [Contacts]
 *     summary: Update an existing contact by ID
 *     description: Updates a contact's information using their unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID (MongoDB ObjectId)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Contact updated"
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.put("/:id", updateContact);
/**
 * @openapi
 * /contacts/{id}:
 *   get:
 *     tags: [Contacts]
 *     summary: Get a contact by ID
 *     description: Retrieves a single contact by their unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID (MongoDB ObjectId)
 *     responses:
 *       200:
 *         description: Contact found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getContactById);
/**
 * @openapi
 * /contacts/{id}:
 *   delete:
 *     tags: [Contacts]
 *     summary: Delete a contact by ID
 *     description: Permanently deletes a contact from the database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID (MongoDB ObjectId)
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Contact deleted"
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", deleteContact);
/**
 * @openapi
 * /contacts:
 *   get:
 *     tags: [Contacts]
 *     summary: Get all contacts
 *     description: Retrieves a list of all contacts in the database
 *     responses:
 *       200:
 *         description: List of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllContacts);

export default router;
