const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// Set up GET all and POST at /api/users
router.route("/").get(getAllUser).post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:id/friends").post(addFriend);

router.route("/:id/friends/:friendId").delete(removeFriend);

module.exports = router;
