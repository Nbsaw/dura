import qs from 'qs';
import axios from 'axios';

import { config, me } from '../../../constant';
import { fetchGithubWithOauth } from '../../comman';

const { USERNAME, REPO } = me;
const { GITHUB_API_URL } = config;

import * as TYPES from './types';

// ref ↓
// https://stackoverflow.com/questions/23314806/setting-default-value-for-typescript-object-passed-as-argument
export async function getAll({
  state = 'open'
}: TYPES.getAllParams = {}): Promise<TYPES.getAllResponse[]> {
  const query = qs.stringify({ state });
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues?${query}`
  );
  return request.data;
}

export async function getDetails({
  number
}: TYPES.getDetailsParams): Promise<TYPES.getDetailsResponse> {
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${number}`
  );
  return request.data;
}

export async function getComments({
  number
}: TYPES.getCommentsParams): Promise<TYPES.getCommentsResponse[]> {
  // /repos/:owner/:repo/issues/:number/comments
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${number}/comments`
  );
  return request.data;
}

// export async function createComment({
//   body,
//   access_token,
//   issuesId
// }: TYPES.createComment) {
//   const res = await axios({
//     method: 'post',
//     url: `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${issuesId}/comments`,
//     data: {
//       body
//     },
//     headers: {
//       Authorization: `token ${access_token}`
//     }
//   });
//   return res;
// }
