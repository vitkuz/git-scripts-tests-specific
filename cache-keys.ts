const cacheKeys = {
  user: (id: string): string => `user:${id}`,
  userList: (page: number): string => `users:page:${page}`,
  session: (token: string): string => `session:${token}`,
  config: (name: string): string => `config:${name}`,
};

const parseCacheKey = (key: string): { type: string; id: string } | null => {
  const parts: string[] = key.split(':');
  if (parts.length < 2) return null;
  return { type: parts[0], id: parts.slice(1).join(':') };
};

const isExpired = (timestamp: number, ttl: number): boolean => {
  return Date.now() > timestamp + ttl * 1000;
};

export { cacheKeys, parseCacheKey, isExpired };
