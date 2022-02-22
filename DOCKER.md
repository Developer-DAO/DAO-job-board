# Supabase Local Docker Setup

## install docker engine

https://docs.docker.com/get-docker/

## supabase init

This command will create a supabase folder which holds all the configuration for developing your project locally. Script pauses three times asking for port numbers.</br> Unless you need to change them just hit enter three times to use default ports.

```
supabase init
```

## supabase start

This command uses Docker to start all the open source services of Supabase. This command will take a while to run, there are a lot of services to build.

```
supabase start
```

## update postgres

Use docker ps to get the name of the existing container. supabase-db</br>
Use the command docker exec -it "container name" /bin/bash to get a bash shell in the container

```
docker exec -it supabase-db /bin/bash
apt-get update
apt-get install postgresql
```

## schema

### copy schema to postgres container

```
docker cp database/schema.sql supabase-db:/schema.sql
```

### load schema

```
docker exec -it supabase-db /bin/bashß
psql -U postgres -d postgres -f schema.sql
```

## set env variables

Create file.
/packages/client/.env.local

```
SUPABASE_URL=http://localhost:8000
SUPABASE_PUBLIC_KEY=PUT_ANON_KEY_HERE
SUPABASE_SECRET=PUT_SERVICE_ROLE_KEY_HERE
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
```

Keys are displayed when you first run supabase init. Also found at bottom of .supabase/docker/kong/kong.yml</br>
First key listed is Public, second key is Secret.
