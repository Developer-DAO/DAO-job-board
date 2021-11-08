import { PrimaryKey, WithTimestamp } from "./common.model";

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
