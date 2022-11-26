import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { TWITTER_API_BEARER_TOKEN } = process.env;
axios.defaults.headers.common = {
  Authorization: `bearer ${TWITTER_API_BEARER_TOKEN}`,
};

export default axios;
