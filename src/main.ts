import express from "express"
import config from "config"
import logger from "./utils/logger"
import connect from "./utils/mongodb-connect"

const app = express()

const port = config.get<number>("port")

app.listen(port, async () => {
    logger.info(`app is up and running on port ${port}`)
    // connect to database 
    logger.info("connecting to mongodb isntance ...")
    await connect();
})