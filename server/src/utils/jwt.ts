import jwt, { SignOptions } from "jsonwebtoken";

export const signJwt = ({
  payload,
  secret,
  options,
}: {
  payload: string | object | Buffer;
  secret: string;
  options?: SignOptions;
}) => {
  const token = jwt.sign(payload, secret, {
    ...(options && options),
    algorithm: "HS256",
  });
  return token;
};

export const verifyJwt = <Payload>({
  token,
  secret,
}: {
  token: string;
  secret: string;
}): Payload => {
  const payload = jwt.verify(token, secret) as Payload;
  return payload;
};

export type SignJwtType = typeof signJwt;
export type VerifyJwtType = typeof verifyJwt;
