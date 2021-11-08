DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_auth_user;

DROP TABLE IF EXISTS public.gig_keyword;
DROP TABLE IF EXISTS public.gig_applications;
DROP TABLE IF EXISTS public.gigs;
DROP TABLE IF EXISTS public.job_keyword;
DROP TABLE IF EXISTS public.job_applications;
DROP TABLE IF EXISTS public.jobs;
DROP TABLE IF EXISTS public.company_members;
DROP TABLE IF EXISTS public.companies;
DROP TABLE IF EXISTS public.links;
DROP TABLE IF EXISTS public.user_keyword;
DROP TABLE IF EXISTS public.users;
DROP TABLE IF EXISTS public.keywords;
-- setup: fresh auth.users
DELETE FROM auth.users;



-- table: keywords
CREATE TABLE public.keywords (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  name VARCHAR NOT NULL UNIQUE CHECK (name <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP
);



-- table: users
CREATE TABLE public.users (
  id uuid PRIMARY KEY NOT NULL REFERENCES auth.users (id),
  avatar_url VARCHAR CHECK (avatar_url <> ''),
  cover_photo_url VARCHAR CHECK (cover_photo_url <> ''),
  email VARCHAR UNIQUE CHECK (email <> ''),
  username VARCHAR UNIQUE CHECK (username <> ''),
  preferences VARCHAR UNIQUE CHECK (preferences <> ''),
  wallet_address VARCHAR(128) UNIQUE CHECK (wallet_address <> ''),
  disabled_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP
);
COMMENT ON COLUMN public.users.id IS 'The auth.users reference';
-- ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- table: user_keyword
CREATE TABLE public.user_keyword (
  user_id uuid NOT NULL REFERENCES public.users (id),
  keyword_id uuid NOT NULL REFERENCES public.keywords (id),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  PRIMARY KEY (user_id, keyword_id)
);

-- trigger: handle new registered user
CREATE OR REPLACE FUNCTION public.handle_new_auth_user()
RETURNS TRIGGER AS $$
BEGIN 
  INSERT INTO public.users (id, email) VALUES (new.id::UUID, new.email::TEXT);

  return new;
END
$$
LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE PROCEDURE public.handle_new_auth_user();



-- table: links
CREATE TABLE public.links (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  linkable_id uuid NOT NULL,
  linkable_type VARCHAR NOT NULL CHECK (linkable_type <> ''),
  title VARCHAR,
  type VARCHAR CHECK (type <> ''),
  url VARCHAR UNIQUE CHECK (url <> ''),
  featured_photo_url VARCHAR UNIQUE CHECK (featured_photo_url <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by uuid NOT NULL DEFAULT auth.uid()
);



-- table: companies
CREATE TABLE public.companies (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  name VARCHAR NOT NULL CHECK (name <> ''),
  email VARCHAR NOT NULL CHECK (email <> ''),
  description TEXT NOT NULL CHECK (description <> ''),
  logo_url VARCHAR CHECK (logo_url <> ''),
  cover_photo_url VARCHAR CHECK (cover_photo_url <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by uuid NOT NULL DEFAULT auth.uid()
);

-- table: company_members
CREATE TABLE public.company_members (
  company_id uuid NOT NULL REFERENCES public.companies (id),
  user_id uuid NOT NULL REFERENCES public.users (id),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP
);



-- table: jobs
CREATE TABLE public.jobs (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES public.companies (id),
  title VARCHAR NOT NULL CHECK (title <> ''),
  description TEXT NOT NULL CHECK (description <> ''),
  position VARCHAR CHECK (position <> ''),
  opportunity VARCHAR CHECK (opportunity <> ''),
  featured_photo_url VARCHAR CHECK (featured_photo_url <> ''),
  status VARCHAR CHECK (status <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by uuid NOT NULL DEFAULT auth.uid()
);

-- table: job_keyword
CREATE TABLE public.job_keyword (
  job_id uuid NOT NULL REFERENCES public.jobs (id),
  keyword_id uuid NOT NULL REFERENCES public.keywords (id),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  PRIMARY KEY (job_id, keyword_id)
);

-- table: job_applications
CREATE TABLE public.job_applications (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  job_id uuid NOT NULL REFERENCES public.jobs (id),
  pitch VARCHAR CHECK (pitch <> ''),
  content TEXT CHECK (content <> ''),
  status VARCHAR CHECK (status <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by uuid NOT NULL DEFAULT auth.uid()
);


-- table: gigs
CREATE TABLE public.gigs (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL CHECK (title <> ''),
  description TEXT NOT NULL CHECK (description <> ''),
  position VARCHAR CHECK (position <> ''),
  featured_photo_url VARCHAR CHECK (featured_photo_url <> ''),
  experience_level VARCHAR CHECK (experience_level <> ''),
  status VARCHAR CHECK (status <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by uuid NOT NULL DEFAULT auth.uid()
);

-- table: gig_keyword
CREATE TABLE public.gig_keyword (
  gig_id uuid NOT NULL REFERENCES public.gigs (id),
  keyword_id uuid NOT NULL REFERENCES public.keywords (id),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  PRIMARY KEY (gig_id, keyword_id)
);

-- table: gig_applications
CREATE TABLE public.gig_applications (
  id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  gig_id uuid NOT NULL REFERENCES public.gigs (id),
  pitch VARCHAR CHECK (pitch <> ''),
  content TEXT CHECK (content <> ''),
  status VARCHAR CHECK (status <> ''),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  deleted_at TIMESTAMP,
  created_by uuid NOT NULL DEFAULT auth.uid()
);






