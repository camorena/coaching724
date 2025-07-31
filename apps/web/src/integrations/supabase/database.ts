import { useState, useEffect } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import supabase from './client';

// Generic hook for fetching data from Supabase
export function useSupabaseQuery<T>(
  tableName: string, 
  options?: {
    columns?: string;
    filter?: Record<string, any>;
    eq?: [string, any][];
    order?: [string, 'asc' | 'desc'][];
    range?: [number, number];
    limit?: number;
    single?: boolean;
  }
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        let query = supabase
          .from(tableName)
          .select(options?.columns || '*');
        
        // Apply filters
        if (options?.eq) {
          for (const [column, value] of options.eq) {
            query = query.eq(column, value);
          }
        }
        
        // Apply order
        if (options?.order) {
          for (const [column, direction] of options.order) {
            query = query.order(column, { ascending: direction === 'asc' });
          }
        }
        
        // Apply range
        if (options?.range) {
          query = query.range(options.range[0], options.range[1]);
        }
        
        // Apply limit
        if (options?.limit) {
          query = query.limit(options.limit);
        }
        
        // Get single or multiple rows
        const { data, error } = options?.single 
          ? await query.single() 
          : await query;
        
        if (error) {
          setError(error);
        } else {
          setData(data as any);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tableName, JSON.stringify(options)]);

  return { data, error, loading };
}

// Mutation hook for inserting, updating, or deleting data
export function useSupabaseMutation<T>(tableName: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<PostgrestError | null>(null);
  
  const insertRow = async (data: Partial<T>) => {
    setLoading(true);
    setError(null);
    
    try {
      const { data: insertedData, error } = await supabase
        .from(tableName)
        .insert(data)
        .select();
      
      setLoading(false);
      
      if (error) {
        setError(error);
        return { data: null, error };
      }
      
      return { data: insertedData, error: null };
    } catch (err) {
      setLoading(false);
      console.error('Error inserting data:', err);
      return { data: null, error: err as PostgrestError };
    }
  };
  
  const updateRow = async (id: string | number, data: Partial<T>) => {
    setLoading(true);
    setError(null);
    
    try {
      const { data: updatedData, error } = await supabase
        .from(tableName)
        .update(data)
        .eq('id', id)
        .select();
      
      setLoading(false);
      
      if (error) {
        setError(error);
        return { data: null, error };
      }
      
      return { data: updatedData, error: null };
    } catch (err) {
      setLoading(false);
      console.error('Error updating data:', err);
      return { data: null, error: err as PostgrestError };
    }
  };
  
  const deleteRow = async (id: string | number) => {
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);
      
      setLoading(false);
      
      if (error) {
        setError(error);
        return { success: false, error };
      }
      
      return { success: true, error: null };
    } catch (err) {
      setLoading(false);
      console.error('Error deleting data:', err);
      return { success: false, error: err as PostgrestError };
    }
  };
  
  return {
    insertRow,
    updateRow,
    deleteRow,
    loading,
    error,
  };
}

// Real-time subscription hook
export function useSupabaseSubscription<T>(
  tableName: string,
  options?: {
    event?: 'INSERT' | 'UPDATE' | 'DELETE' | '*';
    filter?: string;
  }
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const subscription = supabase
      .channel()
      .on('postgres_changes', {
        event: options?.event || '*',
        schema: 'public',
        table: tableName,
        filter: options?.filter,
      }, (payload) => {
        const { eventType, new: newRecord, old: oldRecord } = payload;
        
        if (eventType === 'INSERT') {
          setData((current) => [...current, newRecord as T]);
        } else if (eventType === 'UPDATE') {
          setData((current) => 
            current.map((item: any) => item.id === (newRecord as any).id ? newRecord as T : item)
          );
        } else if (eventType === 'DELETE') {
          setData((current) => 
            current.filter((item: any) => item.id !== (oldRecord as any).id)
          );
        }
      })
      .subscribe((status, err) => {
        if (status !== 'SUBSCRIBED') {
          setError(err || new Error(`Subscription status: ${status}`));
        }
      });
    
    return () => {
      subscription.unsubscribe();
    };
  }, [tableName, JSON.stringify(options)]);
  
  return { data, error };
}
