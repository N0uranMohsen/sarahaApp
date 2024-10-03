import { Router } from "express";
import { addMEssage, deleteMessage, readMessage } from "./message.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";



const messagRouter =Router()
messagRouter.route('').post(addMEssage).get(verifyToken,readMessage)
messagRouter.route('/:id').delete(verifyToken,deleteMessage)


export default messagRouter