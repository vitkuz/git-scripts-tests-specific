import { z } from 'zod';

const queryResultSchema = z.object({
  rows: z.array(z.record(z.unknown())),
  rowCount: z.number(),
  duration: z.number(),
});

type QueryResult = z.infer<typeof queryResultSchema>;

const queries = {
  getUserById: 'SELECT * FROM users WHERE id = $1',
  getUserByEmail: 'SELECT * FROM users WHERE email = $1',
  listUsers: 'SELECT * FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2',
  createUser: 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
  updateUser: 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
  deleteUser: 'DELETE FROM users WHERE id = $1',
};

const buildPaginationQuery = (baseQuery: string, page: number, limit: number): string => {
  const offset: number = (page - 1) * limit;
  return `${baseQuery} LIMIT ${limit} OFFSET ${offset}`;
};

export { queryResultSchema, queries, buildPaginationQuery };
export type { QueryResult };
