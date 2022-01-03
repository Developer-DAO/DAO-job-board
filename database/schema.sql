DROP TABLE IF EXISTS public.job_keyword;
DROP TABLE IF EXISTS public.job_applications;
DROP TABLE IF EXISTS public.jobs;
DROP TABLE IF EXISTS public.organization_members;
DROP TABLE IF EXISTS public.organizations;
DROP TABLE IF EXISTS public.user_keyword;
DROP TABLE IF EXISTS public.keywords;
DROP TABLE IF EXISTS public.links;
DROP TABLE IF EXISTS public.projects;
DROP TABLE IF EXISTS public.users;



-- table: keywords
CREATE TABLE public.keywords (
  id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  name VARCHAR NOT NULL UNIQUE CHECK (name <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP
);



-- table: users
CREATE TABLE public.users (
  id VARCHAR PRIMARY KEY NOT NULL UNIQUE CHECK (id <> ''),
  nonce UUID UNIQUE,
  avatar_url VARCHAR CHECK (avatar_url <> ''),
  email VARCHAR UNIQUE CHECK (email <> ''),
  username VARCHAR UNIQUE CHECK (username <> ''),
  name VARCHAR CHECK (name <> ''),
  description VARCHAR CHECK (description <> ''),
  title VARCHAR CHECK (title <> ''),
  status VARCHAR CHECK (status <> ''),
  location VARCHAR CHECK (location <> ''),
  disabled_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP
);
COMMENT ON COLUMN public.users.id IS 'References to a wallet address';
-- ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- table: projects

CREATE TABLE public.projects (
  id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  github_url VARCHAR,
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP
  created_by VARCHAR NOT NULL REFERENCES public.users (id)
);

-- table: user_keyword
CREATE TABLE public.user_keyword (
  user_id VARCHAR NOT NULL REFERENCES public.users (id),
  keyword_id UUID NOT NULL REFERENCES public.keywords (id),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  PRIMARY KEY (user_id, keyword_id)
);



-- table: links
CREATE TABLE public.links (
  id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  linkable_id VARCHAR NOT NULL,
  linkable_type VARCHAR NOT NULL CHECK (linkable_type <> ''),
  title VARCHAR,
  type VARCHAR CHECK (type <> ''),
  url VARCHAR UNIQUE CHECK (url <> ''),
  featured_photo_url VARCHAR UNIQUE CHECK (featured_photo_url <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by VARCHAR NOT NULL REFERENCES public.users (id)
);
COMMENT ON COLUMN public.links.created_by IS 'References to a wallet address from users table';



-- table: organizations
CREATE TABLE public.organizations (
  id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  name VARCHAR NOT NULL CHECK (name <> ''),
  email VARCHAR NOT NULL CHECK (email <> ''),
  description TEXT NOT NULL CHECK (description <> ''),
  logo_url VARCHAR CHECK (logo_url <> ''),
  cover_photo_url VARCHAR CHECK (cover_photo_url <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by VARCHAR NOT NULL REFERENCES public.users (id)
);
COMMENT ON COLUMN public.organizations.created_by IS 'References to a wallet address from users table';
COMMENT ON TABLE public.organizations IS 'Can be a DAO, company or a small team of developers';

-- table: organization_members
CREATE TABLE public.organization_members (
  organization_id UUID NOT NULL REFERENCES public.organizations (id),
  user_id VARCHAR NOT NULL REFERENCES public.users (id),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by VARCHAR NOT NULL REFERENCES public.users (id)
);



-- table: jobs
CREATE TABLE public.jobs (
  id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES public.organizations (id),
  title VARCHAR NOT NULL CHECK (title <> ''),
  description TEXT NOT NULL CHECK (description <> ''),
  position VARCHAR CHECK (position <> ''),
  type VARCHAR CHECK (type <> ''),
  compensation VARCHAR CHECK (compensation <> ''),
  max VARCHAR CHECK (max <> ''),
  min VARCHAR CHECK (min <> ''),
  equity VARCHAR CHECK (equity <> ''),
  location VARCHAR CHECK (location <> ''),
  contact VARCHAR CHECK (contact <> ''),
  featured_photo_url VARCHAR CHECK (featured_photo_url <> ''),
  status VARCHAR CHECK (status <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by VARCHAR NOT NULL REFERENCES public.users (id)
);
COMMENT ON COLUMN public.jobs.created_by IS 'References to a wallet address from users table';

-- table: job_keyword
CREATE TABLE public.job_keyword (
  job_id UUID NOT NULL REFERENCES public.jobs (id),
  keyword_id UUID NOT NULL REFERENCES public.keywords (id),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by VARCHAR NOT NULL REFERENCES public.users (id),
  PRIMARY KEY (job_id, keyword_id)
);

-- table: job_applications
CREATE TABLE public.job_applications (
  id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  job_id UUID NOT NULL REFERENCES public.jobs (id),
  pitch VARCHAR CHECK (pitch <> ''),
  content TEXT CHECK (content <> ''),
  status VARCHAR CHECK (status <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by VARCHAR NOT NULL REFERENCES public.users (id)
);
COMMENT ON COLUMN public.job_applications.created_by IS 'References to a wallet address from users table';