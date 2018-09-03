// @flow
import { GITHUB_API_URL } from '../constant';
import { fetchGithubWithOauth } from './comman';
import qs from 'qs';

type GetRepoInfoParams = { username: string, repo: string };
type GetAllParams = { username: string, repo: string, state: string };
type GetDetailsParams = { username: string, repo: string, number: number };

const github = {
  getRepoInfo: async ({ username, repo }: GetRepoInfoParams) => {
    const request = await fetchGithubWithOauth.get(
      `${GITHUB_API_URL}/repos/${username}/${repo}`
    );
    const result = request.data;
    return result;
  },
  issues: {
    getAll: async ({ username, repo, state = 'open' }: GetAllParams) => {
      const query = qs.stringify({ state });
      const request = await fetchGithubWithOauth.get(
        `${GITHUB_API_URL}/repos/${username}/${repo}/issues?${query}`
      );
      const result = request.data;
      return result;
    },
    getDetails: async ({ username, repo, number }: GetDetailsParams) => {
      const request = await fetchGithubWithOauth.get(
        `${GITHUB_API_URL}/repos/${username}/${repo}/issues/${number}`
      );
      const result = request.data;
      return result;
    },
  },
};

export default github;
