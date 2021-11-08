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
export type ApplicationStatus =
  | "Draft"
  | "Pending"
  | "Viewed"
  | "Ready for Interview"
  | "Done";

/**
 * Status for job/gig postings.
 *
 * Default status should always be "Draft"
 */
export type PostingStatus = "Draft" | "Published" | "Closed";
