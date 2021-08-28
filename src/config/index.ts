
export const config = {
    HOSTSQL:process.env.HOSTSQL,
    DBNAME:process.env.DBNAME,
    USERDB:process.env.USERDB,
    PASSWORDDB:process.env.PASSWORDDB,
    HOST:process.env.PORT || 3000,
    PORTSQL: parseInt(process.env.PORTSQL!),
    REDISHOST:process.env.REDISHOST,
    REDISPORT:parseInt(process.env.REDISPORT!)
}

export const isDev: boolean = process.env.NODE_ENV === "development" ? true: false;