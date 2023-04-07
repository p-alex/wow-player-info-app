import { Request, Response } from "express";
import { WowServiceListType } from ".";
import { redis } from "../../../redis";
import {
  GetCharacterInfoInput,
  GetProtectedCharacterInfoInput,
  GetSummaryInput,
} from "./wow.validation";

class WowController {
  private wowServiceList: WowServiceListType;

  constructor({ wowServiceList }: { wowServiceList: WowServiceListType }) {
    this.wowServiceList = wowServiceList;
  }

  makeWowControllerList() {
    return Object.freeze({
      getSummaryController: this.getSummaryController,
      getCharacterMediaController: this.getCharacterMediaController,
      getProtectedCharacterController: this.getProtectedCharacterController,
      getCharacterEquipmentController: this.getCharacterEquipmentController,
      getCharacterStatisticsController: this.getCharacterStatisticsController,
      getCharacterDungeonsController: this.getCharacterDungeonsController,
      getCharacterQuestsController: this.getCharacterQuestsController,
      getCharacterSummaryController: this.getCharacterSummaryController,
    });
  }

  private getSummaryController = async (
    req: Request<{}, {}, {}, GetSummaryInput>,
    res: Response
  ) => {
    try {
      // @ts-ignore
      const user_id = req.user_id;

      const { region } = req.query;

      const cached = await redis.get("summary-" + user_id + "-" + region);

      if (cached) {
        return res
          .status(200)
          .json({ success: true, errors: [], data: JSON.parse(cached) });
      }

      const data = await this.wowServiceList.getSummaryService({
        user_id,
        region,
      });

      await redis.set("summary-" + user_id, JSON.stringify(data), "EX", 2400); // 40min

      return res.status(200).json({ success: true, errors: [], data });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: [{ message: error.message }],
        data: null,
      });
    }
  };

  private getCharacterMediaController = async (
    req: Request<{}, {}, {}, GetCharacterInfoInput>,
    res: Response
  ) => {
    try {
      // @ts-ignore
      const user_id = req.user_id;
      const { char_name, realm_slug, region } = req.query;

      const cached = await redis.get(
        "character-media-" +
          user_id +
          "-" +
          char_name +
          "-" +
          realm_slug +
          "-" +
          region
      );

      if (cached) {
        return res
          .status(200)
          .json({ success: true, errors: [], data: JSON.parse(cached) });
      }

      const data = await this.wowServiceList.getCharacterMediaService({
        region,

        user_id,
        char_name,
        realm_slug,
      });

      await redis.set(
        "character-media-" + user_id + "-" + char_name + "-" + realm_slug,
        JSON.stringify(data),
        "EX",
        2400 // 40min
      );

      return res.status(200).json({ success: true, errors: [], data });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        errors: [{ message: error.message }],
        data: null,
      });
    }
  };

  private getCharacterSummaryController = async (
    req: Request<{}, {}, {}, GetCharacterInfoInput>,
    res: Response
  ) => {
    try {
      //@ts-ignore
      const user_id = req.user_id;
      const { region, realm_slug, char_name } = req.query;
      const data = await this.wowServiceList.getCharacterSummaryService({
        user_id,
        region,

        realm_slug,
        char_name,
      });
      return res.status(200).json({ success: true, errors: [], data });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        errors: [{ message: error.message }],
        data: null,
      });
    }
  };

  private getProtectedCharacterController = async (
    req: Request<{}, {}, {}, GetProtectedCharacterInfoInput>,
    res: Response
  ) => {
    try {
      //@ts-ignore
      const user_id = req.user_id;
      const { region, realm_id, char_id } = req.query;
      const data = await this.wowServiceList.getProtectedCharacterService({
        user_id,
        region,

        realm_id,
        char_id,
      });
      return res.status(200).json({ success: true, errors: [], data });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        errors: [{ message: error.message }],
        data: null,
      });
    }
  };

  private getCharacterEquipmentController = async (
    req: Request<{}, {}, {}, GetCharacterInfoInput>,
    res: Response
  ) => {
    try {
      //@ts-ignore
      const user_id = req.user_id;
      const { region, char_name, realm_slug } = req.query;

      const cached = await redis.get(
        "character-equipment-" +
          user_id +
          "-" +
          char_name +
          "-" +
          realm_slug +
          "-" +
          region
      );

      if (cached) {
        return res
          .status(200)
          .json({ success: true, errors: [], data: JSON.parse(cached) });
      }

      const data = await this.wowServiceList.getCharacterEquipmentService({
        user_id,
        region,
        char_name,
        realm_slug,
      });

      await redis.set(
        "character-equipment-" +
          user_id +
          "-" +
          char_name +
          "-" +
          realm_slug +
          "-" +
          region,
        JSON.stringify(data),
        "EX",
        2400 // 40min
      );

      return res.status(200).json({ success: true, errors: [], data });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        errors: [{ message: error.message }],
        data: null,
      });
    }
  };

  private getCharacterStatisticsController = async (
    req: Request<{}, {}, {}, GetCharacterInfoInput>,
    res: Response
  ) => {
    try {
      //@ts-ignore
      const user_id = req.user_id;
      const { region, char_name, realm_slug } = req.query;
      const data = await this.wowServiceList.getCharacterStatisticsService({
        user_id,
        region,

        char_name,
        realm_slug,
      });
      return res.status(200).json({ success: true, errors: [], data });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        errors: [{ message: error.message }],
        data: null,
      });
    }
  };

  private getCharacterDungeonsController = async (
    req: Request<{}, {}, {}, GetCharacterInfoInput>,
    res: Response
  ) => {
    try {
      //@ts-ignore
      const user_id = req.user_id;
      const { region, char_name, realm_slug } = req.query;
      const data = await this.wowServiceList.getCharacterDungeonsService({
        user_id,
        region,

        char_name,
        realm_slug,
      });
      return res.status(200).json({ success: true, errors: [], data });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        errors: [{ message: error.message }],
        data: null,
      });
    }
  };

  private getCharacterQuestsController = async (
    req: Request<{}, {}, {}, GetCharacterInfoInput>,
    res: Response
  ) => {
    try {
      //@ts-ignore
      const user_id = req.user_id;
      const { region, char_name, realm_slug } = req.query;
      const data = await this.wowServiceList.getCharacterQuestsService({
        user_id,

        region,
        char_name,
        realm_slug,
      });
      return res.status(200).json({ success: true, errors: [], data });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        errors: [{ message: error.message }],
        data: null,
      });
    }
  };
}

export default WowController;
