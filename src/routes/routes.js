import {addContact, deleteContact, getContact, getContacts, updateContact} from "../controllers/contact.controller.js";


const routes = (app) => {
    app.route('/contact').get((req, res, next) => {
        console.log(req.method + " " + req.url);
        next();
    }, getContacts)
        .post(addContact)



    app.route('/contact/:contactId').get(getContact).put(updateContact).delete(deleteContact)
}


export default routes;