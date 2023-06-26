import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { createConversations, getConversations, getSingleConversation, updateConversation } from "../controller/conversation.controller.js";

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.post("/", verifyToken, createConversations);
router.get("/single/:id", verifyToken, getSingleConversation);
router.put("/:id", verifyToken, updateConversation);

export default router;
