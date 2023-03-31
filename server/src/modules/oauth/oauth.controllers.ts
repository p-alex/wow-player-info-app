import { Request, Response } from "express";
import { OAuthServiceListType } from ".";
import ms from "ms";

class OAuthController {
  private oauthServiceList: OAuthServiceListType;

  constructor({
    oauthServiceList,
  }: {
    oauthServiceList: OAuthServiceListType;
  }) {
    this.oauthServiceList = oauthServiceList;
  }

  makeOAuthControllerList() {
    return Object.freeze({
      loginController: this.loginController,
      refreshTokenController: this.refreshTokenController,
      logoutController: this.logoutController,
    });
  }

  private loginController = async (
    req: Request<{}, {}, {}, { code: string }>,
    res: Response
  ) => {
    try {
      const { code } = req.query;
      const data = await this.oauthServiceList.loginService({
        authorizationCode: code,
      });
      res.cookie("refresh_token", data.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: ms(process.env.REFRESH_TOKEN_EXPIRE!),
      });
      return res.redirect("http://localhost:3000");
    } catch (error: any) {
      console.log(error);
      return res.redirect(`http://localhost:3000/login?error=${error.message}`);
    }
  };

  private refreshTokenController = async (req: Request, res: Response) => {
    try {
      const refreshToken = req.cookies.refresh_token;

      const data = await this.oauthServiceList.refreshTokenService({
        refreshToken,
      });

      if (data.statusCode === 200) {
        res.cookie("refresh_token", data.data?.newRefreshToken, {
          maxAge: ms(process.env.REFRESH_TOKEN_EXPIRE!),
          sameSite: "strict",
          secure: true,
          httpOnly: true,
        });

        return res.status(200).json({
          success: true,
          errors: [],
          data: {
            user: data.data?.user,
            newAccessToken: data.data?.newAccessToken,
          },
        });
      }

      if (data.statusCode === 403) {
        res.cookie("refresh_token", "", {
          maxAge: 0,
          sameSite: "strict",
          secure: true,
          httpOnly: true,
        });

        return res
          .status(data.statusCode)
          .json({ success: false, errors: data.errors, data: data.data });
      }

      throw new Error("Something went wrong...");
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: [{ message: error.message }],
        data: null,
      });
    }
  };

  logoutController = async (req: Request, res: Response) => {
    try {
      const refreshToken = req.cookies.refresh_token;
      await this.oauthServiceList.logoutService({ refreshToken });
      res.cookie("refresh_token", "", {
        httpOnly: true,
        secure: true,
        maxAge: 0,
      });
      return res.status(200).json({ success: true, errors: [], data: null });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: [{ message: error.message }],
        data: null,
      });
    }
  };
}

export default OAuthController;
