import mongoose from "mongoose";
import config from "config"
import logger from "./logger";
// create async function to connect to database
async function connect() {
    const dbURI: string = config.get<string>("db_uri")
    try {
        await mongoose.connect(dbURI)
        logger.info("connected successfully .. ")

    } catch (err) {
        logger.error("error trying to connect to database")
        process.exit(1)
    }
}

// export the function 
export default connect;