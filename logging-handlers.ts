import { z } from 'zod';

const handlerSchema = z.object({
  type: z.enum(['console', 'file', 'http']),
  level: z.enum(['debug', 'info', 'warn', 'error']),
  format: z.string().default('json'),
});

type Handler = z.infer<typeof handlerSchema>;

const consoleHandler: Handler = {
  type: 'console',
  level: 'debug',
  format: 'pretty',
};

const fileHandler: Handler = {
  type: 'file',
  level: 'info',
  format: 'json',
};

const httpHandler: Handler = {
  type: 'http',
  level: 'error',
  format: 'json',
};

export { handlerSchema, consoleHandler, fileHandler, httpHandler };
export type { Handler };
