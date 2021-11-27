import type { Inputs as JobBasicsInputs } from '@/components/post-job/1_JobBasics';
import type { Inputs as JobDetailsInputs } from '@/components/post-job/2_JobDetails';
import type { Inputs as JobSummaryInputs } from '@/components/post-job/3_JobSummary';
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
  position?: string;
  opportunity?: string;
  featured_photo_url?: string;
  status?: PostingStatus;
} & WithTimestamp &
  CreatedBy;

export type JobForm = Pick<
  Job,
  | 'company_id'
  | 'description'
  | 'title'
  | 'position'
  | 'opportunity'
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

export type JobFormData = JobBasicsInputs & JobDetailsInputs & JobSummaryInputs;
