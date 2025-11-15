import swaggerJSDoc from "swagger-jsdoc";
import contactSchema from "./components/schemas/contact.openapi.js";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Contacts API",
            version: "1.0.0",
        },
        components: {
            schemas: {
                Contact: contactSchema,
            },
        },
    },
    apis: ["./routes/*.js"],
};

export default swaggerJSDoc(options);
