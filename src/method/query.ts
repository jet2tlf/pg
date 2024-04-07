import { pgClient } from '../database/index';
import { parseArguments } from '../utils/parseArguments';

export async function query(query: string, parameters: any[], callback: (result: any) => void) {
    try {
        [query, parameters] = parseArguments(query, parameters);
        
        const result = await pgClient.query(query);

        return callback ? callback(result.rows[0]) : result.rows[0];
    } catch (error) {
        throw new Error(`Error executing query: ${error}`);
    }
}

function print(text: any): any {
    console.log(text);
}
