import qs from 'qs';
import axios from 'axios';

import { config, me } from '../../../constant';
import { fetchGithubWithOauth } from '../../comman';

import {
  getAllParams,
  getDetailsParams,
  createCommentParams,
  getCommentsParams,
} from './types';

const { USERNAME, REPO } = me;
const { GITHUB_API_URL } = config;

export async function getAll({ state = 'open' }: getAllParams) {
  const query = qs.stringify({ state });
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues?${query}`
  );
  const result = request.data;
  return result;
}

export async function getDetails({ number }: getDetailsParams) {
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${number}`
  );
  const result = request.data;
  return result;
}

export async function createComment({
  body,
  access_token,
  issuesId,
}: createCommentParams) {
  const res = await axios({
    method: 'post',
    url: `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${issuesId}/comments`,
    data: {
      body,
    },
    headers: {
      Authorization: `token ${access_token}`,
    },
  });
  return res;
}

export async function getComments({ number }: getCommentsParams) {
  // /repos/:owner/:repo/issues/:number/comments
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${number}/comments`
  );
  const result = request.data;
  return result;
}
