export default {
  socketServerHost: process.env.SOCKET_SERVER_HOST || '127.0.0.1',
  socketServerPort: process.env.SOCKET_SERVER_PORT || 5555,
  redisHost: process.env.REDIS_HOST || '127.0.0.1',
  redisPort: process.env.REDIS_PORT || 6379,
};