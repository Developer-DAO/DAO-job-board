export type Table =
  | 'users'
  | 'user_category'
  | 'jobs'
  | 'job_category'
  | 'job_applications'
  | 'gigs'
  | 'gig_category'
  | 'gig_applications'
  | 'categories'
  | 'company_members'
  | 'links';

export type WithTimestamp = {
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
};

export type CreatedBy = {
  created_by: string;
};

export type PrimaryKey = {
  id: string;
};

export type Application = {
  pitch?: string;
  content?: string;
  status?: ApplicationStatus;
};

/**
 * Status indicator for job/gig applications.
 *
 * Default status should always be "Draft"
 */
export enum ApplicationStatus {
  Draft = 'Draft',

  Pending = 'Pending',

  Viewed = 'Viewed',

  ReadyForInterView = 'Ready for Interview',

  Done = 'Done',
}

/**
 * Status for job/gig postings.
 *
 * Default status should always be "Draft"
 */
export enum PostingStatus {
  Draft = 'Draft',

  Published = 'Published',

  Closed = 'Closed',
}
