import {
  Application,
  ApplicationStatus,
  CreatedBy,
  PostingStatus,
  PrimaryKey,
  WithTimestamp,
} from './common';

export type Gig = PrimaryKey & {
  title: string;
  description: string;
  position?: string;
  featured_photo_url?: string;
  experience_level?: string;
  status?: PostingStatus;
} & WithTimestamp &
  CreatedBy;

export type GigForm = Pick<
  Gig,
  | 'title'
  | 'description'
  | 'position'
  | 'featured_photo_url'
  | 'experience_level'
  | 'status'
>;

export type GigCategory = {
  gig_id: string;
  category_id: string;
} & WithTimestamp;

export type GigApplication = PrimaryKey & {
  gig_id: string;
} & Application &
  WithTimestamp &
  CreatedBy;

export type GigApplicationForm = Pick<
  GigApplication,
  'gig_id' | 'pitch' | 'content' | 'status'
>;
