import {
  Application,
  CreatedBy,
  PostingStatus,
  PrimaryKey,
  WithTimestamp,
} from './common';

export type Job = PrimaryKey & {
  company_id: string;
  title: string;
  description: string;
  position: string;
  type: string;
  compensation: string;
  max: string;
  min: string;
  equity: string;
  location: string;
  contact: string;
  featured_photo_url?: string;
  status?: PostingStatus;
} & WithTimestamp &
  CreatedBy;

export type JobForm = Pick<
  Job,
  | 'title'
  | 'description'
  | 'position'
  | 'type'
  | 'compensation'
  | 'max'
  | 'min'
  | 'equity'
  | 'location'
  | 'contact'
  | 'company_id'
  | 'featured_photo_url'
  | 'status'
  | 'created_by'
>;

export type JobKeyword = {
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
  'job_id' | 'pitch' | 'content' | 'status' | 'created_by'
>;
