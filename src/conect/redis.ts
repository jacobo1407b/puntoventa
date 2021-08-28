import redis from 'redis';
import { info } from 'utils/logger';
import chalk from 'chalk';

export var client: redis.RedisClient;

export function connectRedis():void{
    client = redis.createClient({
        host:process.env.REDISHOST,
        port:parseInt(process.env.REDISPORT!)
    });
    client.on('error', function (err) {
        console.log(chalk.red('Could not establish a connection with redis. ')+err)
    });
    client.on('connect', function (err) {
        info('Connected to redis successfully')
    });
}

