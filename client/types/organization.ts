import { CreatedBy, PrimaryKey, WithTimestamp } from './common';

export type Organization = PrimaryKey & {
  name: string;
  email: string;
  description: string;
  logo_url?: string;
  cover_photo_url?: string;
} & WithTimestamp &
  CreatedBy;

export type OrganizationMember = {
  company_id: string;
  user_id: string;
} & WithTimestamp;

export type OrganizationForm = Pick<
  Organization,
  | 'cover_photo_url'
  | 'description'
  | 'email'
  | 'logo_url'
  | 'name'
  | 'created_by'
>;
