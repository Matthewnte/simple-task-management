import mongoose from 'mongoose';
import config from '../config';
import logger from '../config/winston';

/**
 * @name connectDB
 * @return {void} Null
 */
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(`mongodb://${config.database.host}:27017/todo`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    logger.info('DB connection successful');
  } catch (error) {
    logger.error(`An error occured connecting to DB: ${error}`);
  }
};

export default connectDB;
