const express = require("express");
const router = express.Router();
const post_controller = require("../controllers/postController");

// GET home page.
router.get("/", post_controller.index);

router.get("/:id", post_controller.post_detail_page);

module.exports = router;
