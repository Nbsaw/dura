import { config } from "../constant";
import axios from "axios";

const { GITHUB_API_URL, GITHUB_OAUTH_TOKEN } = config;

const fetchGithubWithOauth = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${GITHUB_OAUTH_TOKEN}`
  }
});

export { fetchGithubWithOauth };
