import express from "express";
import wowControllerList from ".";
import requireAuth from "../../../middleware/requireAuth";
import validateResource from "../../../middleware/validateResource";
import {
  getCharacterInfoSchema,
  getProtectedCharacterInfoSchema,
} from "./wow.validation";

const wowRouter = express.Router();

const {
  getSummaryController,
  getCharacterMediaController,
  getProtectedCharacterController,
  getCharacterEquipmentController,
  getCharacterDungeonsController,
  getCharacterQuestsController,
  getCharacterSummaryController,
} = wowControllerList;

wowRouter.get("/summary", requireAuth, getSummaryController);

wowRouter.get(
  "/character-media",
  requireAuth,
  validateResource(getCharacterInfoSchema),
  getCharacterMediaController
);

wowRouter.get(
  "/character-summary",
  requireAuth,
  validateResource(getCharacterInfoSchema),
  getCharacterSummaryController
);

wowRouter.get(
  "/protected-character",
  requireAuth,
  validateResource(getProtectedCharacterInfoSchema),
  getProtectedCharacterController
);

wowRouter.get(
  "/character-equipment",
  requireAuth,
  validateResource(getCharacterInfoSchema),
  getCharacterEquipmentController
);

wowRouter.get(
  "/character-dungeons",
  requireAuth,
  validateResource(getCharacterInfoSchema),
  getCharacterDungeonsController
);

wowRouter.get(
  "/character-quests",
  requireAuth,
  validateResource(getCharacterInfoSchema),
  getCharacterQuestsController
);

export default wowRouter;
