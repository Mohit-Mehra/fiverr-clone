import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { createOrder, getOrders } from "../controller/order.controller.js";

const router = express.Router();

router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

export default router;
