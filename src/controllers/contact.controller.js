import mongoose from "mongoose";
import { contactSchema } from "../models/contact.model.js"

const Contact = mongoose.model( 'Contact',contactSchema);

export const addContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find()
        res.json(contacts)
    } catch (err) {
        res.status(500).send(err);
    }
}

export const getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.contactId);
        res.json(contact)
    } catch (err) {
        res.status(500).send(err);
    }
}

export const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.params.contactId },
            req.body,
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.json(contact);
    } catch (err) {
        console.error(err); // Optional: Log the error for debugging
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.deleteOne(
            { _id: req.params.contactId },
        );

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.json({
            message: 'Successfully deleted contact',
        });
    } catch (err) {
        console.error(err); // Optional: Log the error for debugging
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}