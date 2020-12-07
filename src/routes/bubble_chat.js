const router = require("express").Router();
const chatController = require("../controllers/bubble_chat");

router
  .get("/all", chatController.getAllChats)
  .delete("/:id", chatController.deleteChat)
  .post("/", chatController.postMessage)
  .patch("/:id", chatController.editMessage);

module.exports = router;
