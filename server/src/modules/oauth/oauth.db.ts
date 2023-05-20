import prisma from "../../../db";

class OAuthDb {
  makeOAuthDbList() {
    return Object.freeze({
      createUser: this.createUser,
      findUserById: this.findUserById,
      findUserByBattleUserId: this.findUserByBattleUserId,
      createSession: this.createSession,
      updateSession: this.updateSession,
      deleteSession: this.deleteSession,
      deleteAllSessions: this.deleteAllSessions,
      deleteExpiredSessions: this.deleteExpiredSessions,
      findBattleNetAccessToken: this.findBattleNetAccessToken,
    });
  }

  private createUser = async ({
    battleUserId,
    battleTag,
  }: {
    battleUserId: string;
    battleTag: string;
  }) => {
    const result = await prisma.users.create({
      data: { battleUserId, battleTag },
    });
    return result;
  };

  private findUserById = async ({ id }: { id: string }) => {
    const result = await prisma.users.findUnique({
      where: { id },
    });
    return result;
  };

  private findUserByBattleUserId = async ({
    battleUserId,
  }: {
    battleUserId: string;
  }) => {
    const result = await prisma.users.findUnique({
      where: { battleUserId },
    });
    return result;
  };

  private createSession = async ({
    user_id,
    hashedRefreshToken,
    bn_access_token,
    expiry_date,
  }: {
    user_id: string;
    hashedRefreshToken: string;
    bn_access_token: string;
    expiry_date: number;
  }) => {
    const result = await prisma.sessions.create({
      data: {
        user_id,
        token: hashedRefreshToken,
        bn_access_token,
        expiry_date: new Date(expiry_date),
      },
      select: { created_at: true },
    });
    return result;
  };

  private updateSession = async ({
    oldHashedRefreshToken,
    newHashedRefreshToken,
  }: {
    oldHashedRefreshToken: string;
    newHashedRefreshToken: string;
  }) => {
    const result = await prisma.sessions.update({
      data: { token: newHashedRefreshToken },
      where: { token: oldHashedRefreshToken },
      select: { token: true },
    });
    return result;
  };

  private deleteSession = async ({
    hashedRefreshToken,
  }: {
    hashedRefreshToken: string;
  }) => {
    const result = await prisma.sessions.delete({
      where: { token: hashedRefreshToken },
      select: { token: true },
    });
    return result;
  };

  private deleteExpiredSessions = async () => {
    const result = await prisma.sessions.deleteMany({
      where: {
        expiry_date: {
          lte: new Date(Date.now()),
        },
      },
    });
    return { success: true };
  };

  private deleteAllSessions = async ({ user_id }: { user_id: string }) => {
    await prisma.sessions.deleteMany({ where: { user_id } });
    return { success: true };
  };

  private findBattleNetAccessToken = async ({
    user_id,
  }: {
    user_id: string;
  }) => {
    const result = await prisma.sessions.findFirst({
      where: {
        user_id,
      },
      select: { bn_access_token: true },
    });
    return result?.bn_access_token;
  };
}

export default OAuthDb;
