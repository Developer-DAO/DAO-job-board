import { PrimaryKey, WithTimestamp } from "./common";

export type User = PrimaryKey & {
  avatar_url?: string;
  cover_photo_url?: string;
  email: string;
  username?: string;
  preferences?: string;
  wallet_address?: string;
  disabled_at?: Date;
} & WithTimestamp;

export type UserCategory = {
  user_id: string;
  category_id: string;
} & WithTimestamp;

export type UserForm = Pick<
  User,
  | "avatar_url"
  | "cover_photo_url"
  | "email"
  | "username"
  | "preferences"
  | "wallet_address"
>;
