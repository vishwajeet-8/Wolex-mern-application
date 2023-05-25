import express from "express";
import {
  registerController,
  loginController,
  test,
  forgotPasswordController,
  updateProfileController,
  getOrderController,
  getAllOrderController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
// router object
const router = express.Router();

//routing
// Register || METHOD:POST
router.post("/register", registerController);

//Login || METHOD:POST
router.post("/login", loginController);

//forgot password
router.post("/forgot-password", forgotPasswordController);

//test
router.get("/test", requireSignIn, isAdmin, test);

//protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update-profile
router.put("/update-profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrderController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrderController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
