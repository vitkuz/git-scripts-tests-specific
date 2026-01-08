import { z } from 'zod';

const endpointSchema = z.object({
  path: z.string(),
  method: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']),
  auth: z.boolean().default(true),
  rateLimit: z.number().optional(),
});

type Endpoint = z.infer<typeof endpointSchema>;

const endpoints: Record<string, Endpoint> = {
  getUsers: {
    path: '/users',
    method: 'GET',
    auth: true,
    rateLimit: 100,
  },
  createUser: {
    path: '/users',
    method: 'POST',
    auth: true,
    rateLimit: 10,
  },
  getUser: {
    path: '/users/:id',
    method: 'GET',
    auth: true,
  },
  updateUser: {
    path: '/users/:id',
    method: 'PUT',
    auth: true,
    rateLimit: 20,
  },
  deleteUser: {
    path: '/users/:id',
    method: 'DELETE',
    auth: true,
    rateLimit: 5,
  },
};

export { endpointSchema, endpoints };
export type { Endpoint };
