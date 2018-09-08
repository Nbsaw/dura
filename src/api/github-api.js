import { config, me } from '../constant';
import axios from 'axios';
import { fetchGithubWithOauth } from './comman';
import qs from 'qs';

const { USERNAME, REPO } = me;
const { GITHUB_API_URL, CLIENTID, CLIENTSECRET } = config;

const github = {
  user: {
    getAccessToken: async code => {
      const res = await axios({
        method: 'post',
        url: 'https://gh-oauth.imsun.net',
        data: {
          code,
          client_id: CLIENTID,
          client_secret: CLIENTSECRET,
        },
      });
      return res.data.access_token;
    },
    getRepoInfo: async ({ username, repo }) => {
      const request = await fetchGithubWithOauth.get(
        `${GITHUB_API_URL}/repos/${username}/${repo}`
      );
      const result = request.data;
      return result;
    },
  },
  issues: {
    getAll: async ({ state = 'open' } = {}) => {
      const query = qs.stringify({ state });
      const request = await fetchGithubWithOauth.get(
        `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues?${query}`
      );
      const result = request.data;
      return result;
    },
    getDetails: async ({ number }) => {
      const request = await fetchGithubWithOauth.get(
        `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${number}`
      );
      const result = request.data;
      return result;
    },
    createComment: async ({ body, access_token, issuesId }) => {
      const res = await axios({
        method: 'post',
        url: `https://api.github.com/repos/${USERNAME}/${REPO}/issues/${issuesId}/comments`,
        data: {
          body,
        },
        headers: {
          Authorization: `token ${access_token}`,
        },
      });
      return res;
    },
    getComments: async ({ username, repo, number }) => {
      // /repos/:owner/:repo/issues/:number/comments
      const request = await fetchGithubWithOauth.get(
        `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${number}/comments`
      );
      const result = request.data;
      return result;
    },
  },
};

export default github;
