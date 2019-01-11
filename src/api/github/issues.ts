import qs from 'qs';
import axios from 'axios';

import { config, me } from '../../constant';
import { fetchGithubWithOauth } from '../comman';

const { USERNAME, REPO } = me;
const { GITHUB_API_URL } = config;

export async function getAll({ state = 'open' } = {}) {
  const query = qs.stringify({ state });
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues?${query}`
  );
  const result = request.data;
  return result;
}

interface PgetDetails {
  number: number;
}
export async function getDetails({ number }: PgetDetails) {
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${number}`
  );
  const result = request.data;
  return result;
}

interface PcreateComment {
  body: string;
  access_token: string;
  issuesId: string;
}
export async function createComment({
  body,
  access_token,
  issuesId,
}: PcreateComment) {
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
}

interface PgetComments {
  number: number;
}
export async function getComments({ number }: PgetComments) {
  // /repos/:owner/:repo/issues/:number/comments
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${number}/comments`
  );
  const result = request.data;
  return result;
}
