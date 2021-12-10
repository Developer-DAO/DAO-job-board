import {
  Application,
  CreatedBy,
  PostingStatus,
  PrimaryKey,
  WithTimestamp,
} from './common';

export type Job = PrimaryKey & {
  company_id: string;
  jobtitle: string;
  jobdescription: string;
  jobposition: string;
  jobtype: string;
  jobcompensation: string;
  jobmax: string;
  jobmin: string;
  jobequity: string;
  joblocation: string;
  jobcontact: string;
  featured_photo_url?: string;
  status?: PostingStatus;
} & WithTimestamp &
  CreatedBy;

export type JobForm = Pick<
  Job,
  | 'jobtitle'
  | 'jobdescription'
  | 'jobposition'
  | 'jobtype'
  | 'jobcompensation'
  | 'jobmax'
  | 'jobmin'
  | 'jobequity'
  | 'joblocation'
  | 'jobcontact'
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
