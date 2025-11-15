import j2s from "joi-to-swagger";
import contactJoiSchema from "../../../validators/contact.schema.js";

const { swagger: contactSchema } = j2s(contactJoiSchema);

export default contactSchema;
