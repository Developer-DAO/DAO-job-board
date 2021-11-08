import { CreatedBy, PrimaryKey, WithTimestamp } from "./common.model";

export type Company = PrimaryKey & {
  name: string;
  email: string;
  description: string;
  logo_url?: string;
  cover_photo_url?: string;
} & WithTimestamp &
  CreatedBy;

export type CompanyMember = {
  company_id: string;
  user_id: string;
} & WithTimestamp;

export type CompanyForm = Pick<
  Company,
  "cover_photo_url" | "description" | "email" | "logo_url" | "name"
>;
