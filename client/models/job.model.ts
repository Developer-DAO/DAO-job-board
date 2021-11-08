import {
  Application,
  ApplicationStatus,
  CreatedBy,
  PostingStatus,
  PrimaryKey,
  WithTimestamp,
} from "./common.model";

export type Job = PrimaryKey & {
  company_id: string;
  title: string;
  description: string;
  position?: string;
  opportunity?: string;
  featured_photo_url?: string;
  status?: PostingStatus;
} & WithTimestamp &
  CreatedBy;

export type JobForm = Pick<
  Job,
  | "company_id"
  | "description"
  | "title"
  | "position"
  | "opportunity"
  | "featured_photo_url"
  | "status"
>;

export type JobCategory = {
  job_id: string;
  category_id: string;
} & WithTimestamp;

export type JobApplication = PrimaryKey & {
  job_id: string;
} & Application &
  WithTimestamp &
  CreatedBy;

export type JobApplicationForm = Pick<
  JobApplication,
  "job_id" | "pitch" | "content" | "status"
>;
