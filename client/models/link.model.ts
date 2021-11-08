import { CreatedBy, PrimaryKey, WithTimestamp } from "./common.model";

/**
 * Add more table names when necessary.
 */
export type LinkableType = "users" | "companies";

export type LinkType =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "dev.to"
  | "medium"
  | "website"
  | "others";

export type Link = PrimaryKey & {
  /**
   * Should reference to a data model that creates the link or requires it.
   *
   * e.g.
   * - A user decides to add social media link. (This should be referencing the primary key from `users` table)
   * - A company adds social media links. (Should be referencing the primary key from `companies` table)
   */
  linkable_id: string;
  /**
   * Should be the name of the tables that is mapped to a polymorphic relationship.
   *
   * e.g.
   * - users
   * - companies
   */
  linkable_type: LinkableType;
  title: string;
  type: LinkType;
  url: string;
  featured_photo_url?: string;
} & CreatedBy &
  WithTimestamp;

export type LinkForm = Pick<
  Link,
  | "linkable_id"
  | "linkable_type"
  | "title"
  | "type"
  | "url"
  | "featured_photo_url"
>;
