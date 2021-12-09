import { PrimaryKey, WithTimestamp } from './common';

export type User = PrimaryKey & {
  avatar_url?: string;
  nonce?: string;
  username?: string;
  name?: string;
  description?: string;
  title?: string;
  status?: string;
  location?: string;
  website?: string;
  disabled_at?: Date;
} & WithTimestamp;

export type UserKeyword = {
  user_id: string;
  category_id: string;
} & WithTimestamp;

export type UserForm = Pick<
  User,
  | 'avatar_url'
  | 'username'
  | 'name'
  | 'description'
  | 'title'
  | 'status'
  | 'location'
  | 'website'
>;
