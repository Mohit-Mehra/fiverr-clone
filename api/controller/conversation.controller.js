import Conversation from "../models/conversation.model.js";
import createError from "../utils/createError.js"

export const createConversations = async (req, res, next) => {
  const conversationId = req.isSeller
    ? req.userId + req.body.to
    : req.body.to + req.userId;
  const sellerId = req.isSeller ? req.userId : req.body.to;
  const buyerId = req.isSeller ? req.body.to : req.userId;

  try {
    const conversation = await Conversation.findOne({ id: conversationId });

    if (conversation) {
      // Conversation already exists
      res.status(200).send(conversation);
    } else {
      // Create a new conversation
      const newConversation = new Conversation({
        id: conversationId,
        sellerId: sellerId,
        buyerId: buyerId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
      });

      const savedConversation = await newConversation.save();
      res.status(201).send(savedConversation);
    }
  } catch (err) {
    next(err);
  }
};
export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    ).sort({updatedAt:-1});
    res.status(201).send(conversations);
  } catch (err) {
    next(err);
  }
};
export const getSingleConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    if(!conversation) return next(createError(404,"Not Found!"))
    res.status(201).send(conversation);
  } catch (err) {
    next(err);
  }
};
export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      {
        id: req.params.id,
      },
      {
        $set: {
          //   readBySeller: true,
          //   readByBuyer: true,
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      {
        new: true,
      }
    );
    res.status(200).send(updatedConversation);
  } catch (err) {
    next(err);
  }
};
