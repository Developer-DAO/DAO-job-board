import { Table } from "../models/common.model";
import { supabase } from "../common/supabase";
import { useLogger } from "./useLogger.hook";

export const useSupabase = <T>(table: Table) => {
  const log = useLogger(`useSupabase-${table}`);

  async function all(columns: string = "*"): Promise<T[]> {
    log.v("all", { columns });
    const { data, error } = await supabase.from(table).select(columns);

    if (error) {
      log.e("find", error, { columns });
      throw Error(`${error.code} ${error.message}`);
    }

    return data ?? [];
  }

  async function find(id: string, columns: string = "*"): Promise<T> {
    log.v("find", { id, columns });

    const { data, error } = await supabase
      .from(table)
      .select(columns)
      .eq("id", id)
      .single();

    if (error) {
      log.e("find", error, { id, columns });
      throw Error(`${error.code} ${error.message}`);
    }

    return data;
  }

  async function create<Y>(payload: Y): Promise<T> {
    log.v("create", { payload });

    const { data, error } = await supabase.from(table).insert(payload).single();

    if (error) {
      log.e("create", error, { payload });
      throw Error(`${error.code} ${error.message}`);
    }

    log.i("create | A new record has been created", { payload, data });

    return data;
  }

  async function update(id: string, payload: T): Promise<T> {
    log.v("update", { id, payload });

    const { data, error } = await supabase
      .from(table)
      .update(payload)
      .eq("id", id)
      .single();

    if (error) {
      log.e("create", error, { payload });
      throw Error(`${error.code} ${error.message}`);
    }

    log.i("update | A record has been updated", { payload, data });

    return data;
  }

  /**
   * Soft deletes a record from DB.
   *
   * @param id
   */
  async function softDelete(id: string): Promise<void> {
    log.v("delete", { id });

    const { data, error } = await supabase.rpc("soft_delete", {
      id,
      table: table,
    });

    if (error) {
      log.e("create", error, { id });
      throw Error(`${error.code} ${error.message}`);
    }

    log.i("delete | A record has been soft-deleted", { id, data });
  }

  return {
    all,
    find,
    create,
    update,
    softDelete,
  };
};
