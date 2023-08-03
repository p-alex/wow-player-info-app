import express from 'express';
import wowControllerList from '.';
import requireAuth from '../../../middleware/requireAuth';
import validateResource from '../../../middleware/validateResource';
import { getCharacterInfoSchema, getProtectedCharacterInfoSchema, getSummarySchema } from './wow.validation';

const wowRouter = express.Router();

const {
  getSummaryController,
  getCharacterMediaController,
  getProtectedCharacterController,
  getCharacterEquipmentController,
  getCharacterStatisticsController,
  getCharacterDungeonsController,
  getCharacterQuestsController,
  getCharacterSummaryController,
} = wowControllerList;

wowRouter.get('/summary', requireAuth, validateResource(getSummarySchema), getSummaryController);

wowRouter.get('/character-media', requireAuth, validateResource(getCharacterInfoSchema), getCharacterMediaController);

wowRouter.get('/character-summary', requireAuth, validateResource(getCharacterInfoSchema), getCharacterSummaryController);

wowRouter.get('/protected-character', requireAuth, validateResource(getProtectedCharacterInfoSchema), getProtectedCharacterController);

wowRouter.get('/character-equipment', requireAuth, validateResource(getCharacterInfoSchema), getCharacterEquipmentController);

wowRouter.get('/character-statistics', requireAuth, validateResource(getCharacterInfoSchema), getCharacterStatisticsController);

wowRouter.get('/character-dungeons', requireAuth, validateResource(getCharacterInfoSchema), getCharacterDungeonsController);

wowRouter.get('/character-quests', requireAuth, validateResource(getCharacterInfoSchema), getCharacterQuestsController);

export default wowRouter;
