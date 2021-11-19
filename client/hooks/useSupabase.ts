import { supabase } from 'common/supabase';
import { Table } from 'types';
import { useLogger } from './useLogger';

/**
 * @description
 * A hook for reading and manipulating a `supabase` table.
 *
 * @example
 * const userRepository = useSupabase<User>("users");
 * const [users, setUsers] = useState<User[]>([]);
 *
 * useEffect(() => {
 *   userRepository.all().then((users) => {
 *     setUsers(users);
 *   });
 * }, []);
 *
 * @author [CarloMiguelDy 🚀](https://twitter.com/CarloMiguelDy)
 */
export const useSupabase = <T>(table: Table) => {
  const logger = useLogger(`useSupabase-${table}`);

  /**
   * @description
   * Fetch all records from a table and optionally specify the columns.
   *
   * @param columns
   * Strictly a comma-separated attributes, it sort of creates a similar query experience with GraphQL.
   * Read more about querying using PostgREST from the official [Supabase docs](https://supabase.io/docs/reference/javascript/select)
   *
   * @example
   * const userRepository = useSupabase<User>("users");
   * const [users, setUsers] = useState<User[]>([]);
   *
   * useEffect(() => {
   *   userRepository.all().then((users) => {
   *     setUsers(users);
   *   });
   * }, []);
   *
   * @example
   * const userRepository = useSupabase<User>("users");
   * const [users, setUsers] = useState<User[]>([]);
   *
   * useEffect(() => {
   *   userRepository.all(`id, name`).then((users) => {
   *     setUsers(users);
   *   });
   * }, []);
   */
  async function all(columns: string = '*'): Promise<T[]> {
    logger.log('all', { columns });
    const { data, error } = await supabase.from(table).select(columns);

    if (error) {
      logger.error('find', error, { columns });
      throw Error(`${error.code} ${error.message}`);
    }

    return data ?? [];
  }

  /**
   * @description Fetch a single record that matches an ID from a table and optionally specify the columns.
   *
   * @param id
   * The primary key of a record in the table. This refers to an existing record in the database.
   * @param columns
   * Strictly a comma-separated attributes, it sort of creates a similar query experience with GraphQL.
   * Read more about querying using PostgREST from the official [Supabase docs](https://supabase.io/docs/reference/javascript/select)
   *
   * @example
   * const userRepository = useSupabase<User>("users");
   * const [user, setUser] = useState<User[]>([]);
   *
   * useEffect(() => {
   *   userRepository.find('some-cool-uuid').then((user) => {
   *     setUser(user);
   *   });
   * }, []);
   *
   * @example
   * const userRepository = useSupabase<User>("users");
   * const [user, setUser] = useState<User[]>([]);
   *
   * useEffect(() => {
   *   userRepository.find('some-cool-uuid', `id, name`).then((user) => {
   *     setUser(user);
   *   });
   * }, []);
   */
  async function find(id: string, columns: string = '*'): Promise<T> {
    logger.log('find', { id, columns });

    const { data, error } = await supabase
      .from(table)
      .select(columns)
      .eq('id', id)
      .single();

    if (error) {
      logger.error('find', error, { id, columns });
      throw Error(`${error.code} ${error.message}`);
    }

    return data;
  }

  /**
   * @description Creates a new record in the specified table.
   *
   * @param payload
   * The request payload where should match the Form type of a data model.
   * For exampl
   *
   * @example
   * const userRepository = useSupabase<User>("users");
   * const [user, setUser] = useState<User[]>([]);
   *
   * useEffect(() => {
   *   const user: UserForm = {
   *      avatar_url: "ipfs://hello-world.jpeg",
   *      cover_photo_url: "ipfs://hello-world-cover-photo.png",
   *      email: "hello.world@ethereum.io",
   *      username: "vitalik_buterin_xyz",
   *      preferences: "hello-world",
   *      wallet_address: "0xHelloWorld",
   *   }
   *
   *   userRepository.create<UserForm>(user).then((user) => {
   *     setUser(user);
   *   });
   * }, []);
   */
  async function create<Y>(payload: Y): Promise<T> {
    logger.log('create', { payload });

    const { data, error } = await supabase.from(table).insert(payload).single();

    if (error) {
      logger.error('create', error, { payload });
      throw Error(`${error.code} ${error.message}`);
    }

    logger.info('create | A new record has been created', { payload, data });

    return data;
  }

  /**
   * @description
   * Partially/completely update an existing record in the
   * specified table that matches an ID.
   *
   * @param id
   * The primary key of a record in the table
   * @param payload
   * An object request payload where it matches the
   * given type e.g. `User`, `Job`, `Gig`
   *
   * @example
   * const userRepository = useSupabase<User>("users");
   * const [user, setUser] = useState<User[]>([]);
   *
   * useEffect(() => {
   *   const payload = {
   *      avatar_url: "ipfs://new-avatar-hello-world.jpeg",
   *   }
   *
   *   // update partially
   *   userRepository.update(user.id, payload).then((user) => {
   *     setUser(user);
   *   });
   *
   *   const xyz = { username: 'my_new_username' }
   *
   *   // update partially
   *   userRepository.update(user.id, xyz).then((user) => {
   *     setUser(user);
   *   })
   *
   *   // can use this syntax too if preferred
   *   userRepository.update(user.id, {
   *      ...user,
   *      email: "my.newemail@polygon.io"
   *   })
   *   .then((user) => {
   *      setUser(user);
   *   })
   * }, []);
   */
  async function update(id: string, payload: T): Promise<T> {
    logger.log('update', { id, payload });

    const { data, error } = await supabase
      .from(table)
      .update(payload)
      .eq('id', id)
      .single();

    if (error) {
      logger.error('create', error, { payload });
      throw Error(`${error.code} ${error.message}`);
    }

    logger.info('update | A record has been updated', { payload, data });

    return data;
  }

  /**
   * @description
   * Soft deletes a record that matches the given ID in a table.
   *
   * @param id
   * The primary key of a record in the table
   *
   * @example
   * const userRepository = useSupabase<User>("users");
   * const [user, setUser] = useState<User[]>([]);
   *
   * useEffect(() => {
   *   softDeleteUser()
   * }, []);
   *
   * async function softDeleteUser() {
   *    await userRepository.softDelete(user.id)
   *
   *    console.log('User soft deleted!')
   * }
   */
  async function softDelete(id: string): Promise<void> {
    logger.log('delete', { id });

    const { data, error } = await supabase.rpc('soft_delete', {
      id,
      table: table,
    });

    if (error) {
      logger.error('create', error, { id });
      throw Error(`${error.code} ${error.message}`);
    }

    logger.info('delete | A record has been soft-deleted', { id, data });
  }

  return {
    all,
    find,
    create,
    update,
    softDelete,
  };
};
