import { PrimaryKey, WithTimestamp } from '.';

export type Keyword = PrimaryKey & {
  name: string;
} & WithTimestamp;

export type KeywordForm = Pick<Keyword, 'name'>;
