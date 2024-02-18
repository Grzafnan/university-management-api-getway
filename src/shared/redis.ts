import { createClient } from "redis";
import { errorLogger, logger } from "./logger";

let redisClient = createClient({
  url: "redis://localhost:6379"
});

redisClient.on("error", (err) => errorLogger.error("Redis Error: ", err));
redisClient.on("connect", () => logger.info("Redis connected"));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect,
};