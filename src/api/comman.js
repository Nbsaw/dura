import { GITHUB_API_URL, GITHUB_OAUTH_TOKEN } from '../constant';
import axios from 'axios';

const fetchGithubWithOauth = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${GITHUB_OAUTH_TOKEN}`,
  },
});

export { fetchGithubWithOauth };
