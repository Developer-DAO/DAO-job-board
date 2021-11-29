export type Table =
  | 'users'
  | 'user_keyword'
  | 'organizations'
  | 'jobs'
  | 'job_keyword'
  | 'job_applications'
  | 'gigs'
  | 'gig_keyword'
  | 'gig_applications'
  | 'keywords'
  | 'organization_members'
  | 'links';

export type WithTimestamp = {
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
};

export type CreatedBy = {
  created_by: string;
};

export type PrimaryKey = {
  id?: string;
};

export type Application = {
  pitch?: string;
  content?: string;
  status?: ApplicationStatus;
};

/**
 * @description
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
 * @description
 * Status for job/gig postings.
 *
 * Default status should always be "Draft"
 */
export enum PostingStatus {
  Draft = 'Draft',

  Published = 'Published',

  Closed = 'Closed',
}
