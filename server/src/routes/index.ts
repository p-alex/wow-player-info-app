import express from 'express';
import oauthRouter from '../modules/oauth/oauth.routes';
import wowRouter from '../modules/wow/wow.routes';
const router = express.Router();

router.use('/oauth', oauthRouter);
router.use('/profile', wowRouter);

export default router;
