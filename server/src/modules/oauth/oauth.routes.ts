import express from "express";
import oauthControllerList from ".";
import requireAuth from "../../../middleware/requireAuth";

const oauthRouter = express.Router();

const { loginController, refreshTokenController, logoutController } =
  oauthControllerList;

oauthRouter.get("/battlenet", loginController);
oauthRouter.get("/refresh-token", refreshTokenController);
oauthRouter.post("/logout", requireAuth, logoutController);

export default oauthRouter;
