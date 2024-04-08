import { pgClient } from '../database/index';

export async function query(query: string, parameters: unknown[], callback: (result: any) => void) {
  try {        
    const result = await pgClient.query(query, parameters);
    return callback ? callback(result.rows[0]) : result.rows[0];
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
}
