import { NextFunction, Request, Response } from 'express';
import { verifyJwt } from '../src/utils/jwt';
import { oauthDbList } from '../src/modules/oauth';

const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.headers.authorization?.split(' ')[1];
    if (!accessToken) throw new Error('No access token provided');
    const payload = verifyJwt<{ id: string }>({
      token: accessToken,
      secret: process.env.ACCESS_TOKEN_SECRET!,
    });
    const user = await oauthDbList.findUserById({ id: payload.id });
    if (!user) throw new Error('User does not exist');
    // @ts-ignore
    req.user_id = user.id;
    next();
  } catch (error: any) {
    console.log(error.message);
    return res.status(403).json({
      success: false,
      error: [{ message: error.message }],
      data: null,
    });
  }
};
export default requireAuth;
