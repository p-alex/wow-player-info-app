import WowDB from "./wow.db";
import WowService from "./wow.service";
import OAuthDb from "../oauth/oauth.db";
import WowController from "./wow.controllers";

const wowDbList = new WowDB().makeWowDB();
const oauthDbList = new OAuthDb().makeOAuthDbList();
const wowServiceList = new WowService({
  wowDbList,
  oauthDbList,
}).makeWowServiceList();

const wowControllerList = new WowController({
  wowServiceList,
}).makeWowControllerList();

export type WowDbListType = typeof wowDbList;
export type WowServiceListType = typeof wowServiceList;

export default wowControllerList;
