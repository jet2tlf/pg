import { Pool } from 'pg';
import { performance } from 'perf_hooks';

export let pgClient: Pool;

export async function createConnection(credentials: string) {
    if (credentials === "null") return console.error("^3PostgreSQL credentials not entered^7");

    pgClient = new Pool({ connectionString: credentials });

    const start = performance.now();

    pgClient.on('connect' , () => {
        const end = performance.now();
        console.log(`^3PostgreSQL^7 connection established in ^5${(end - start).toFixed(2)}^7ms`);
    });

    pgClient.on('error', (error: any) => {
        console.error(`^1PostgreSQL^7 error: ${error}`);
    });

    await pgClient.connect();
}