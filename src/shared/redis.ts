import { createClient } from "redis";
import config from "../config";
import { errorLogger, logger } from "./logger";

let redisClient = createClient({
  url: config.redis.url,
});

redisClient.on("error", (err) => errorLogger.error("Redis Error: ", err));
redisClient.on("connect", () => logger.info("Redis connected"));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect,
};