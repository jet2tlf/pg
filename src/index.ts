import { createConnection, pgClient } from "./database";
import { query } from "./method/query";

export const credentials = GetConvar("postgreCredentials", "null");

setImmediate(async () => {
  try {
    await createConnection(credentials);
  } catch (error) {
      console.error(error);
  }
});

exports('query', query);