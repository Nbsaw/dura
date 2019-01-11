import { config, me } from '../../constant';
import axios from 'axios';
import { fetchGithubWithOauth } from '../comman';
import qs from 'qs';

const { USERNAME, REPO } = me;
const { GITHUB_API_URL, CLIENTID, CLIENTSECRET } = config;


const github = {
  user: {
    getUserInfo: async () => {
      const res = await axios({ url: `${GITHUB_API_URL}/users/${USERNAME}` });
      return res.data;
    },
    getAccessToken: async (code : string) => {
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
    getRepoInfo: async () => {
      const request = await fetchGithubWithOauth.get(
        `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}`
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
    getDetails: async ({ number }: { number:number }) => {
      const request = await fetchGithubWithOauth.get(
        `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${number}`
      );
      const result = request.data;
      return result;
    },
    createComment: async ({ body, access_token, issuesId } : { body: string, access_token: string, issuesId: string }) => {
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
    getComments: async ({ username, repo, number }: { username: string, repo: string, number: number }) => {
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
