import OAuthDb from './oauth.db';
import OAuthService from './oauth.service';
import OAuthController from './oauth.controllers';
import { signJwt, verifyJwt } from '../../utils/jwt';
import fastHash from '../../utils/fastHash';
import getBattleNetAccessToken from '../../utils/getBattleNetAccessToken';
import getBattleNetUserInfo from '../../utils/getBattleNetUserInfo';

export const oauthDbList = new OAuthDb().makeOAuthDbList();

const oauthServiceList = new OAuthService({
  oauthDbList,
  signJwt,
  verifyJwt,
  fastHash,
  getBattleNetAccessToken,
  getBattleNetUserInfo,
}).makeOAuthServiceList();

const oauthControllerList = new OAuthController({
  oauthServiceList,
}).makeOAuthControllerList();

export type OAuthDbListType = typeof oauthDbList;
export type OAuthServiceListType = typeof oauthServiceList;
export type OAuthControllerListType = typeof oauthControllerList;

export default oauthControllerList;
