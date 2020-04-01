import qs from "qs";

import { config, me } from "../../constant";
import { fetchGithubWithOauth } from "../common";

const { USERNAME, REPO } = me;
const { GITHUB_API_URL } = config;

// ref ↓
// https://stackoverflow.com/questions/23314806/setting-default-value-for-typescript-object-passed-as-argument
// page limit: https://stackoverflow.com/questions/33374778/how-can-i-get-all-the-github-issues-using-github-api
export async function getAll({
  state = "open"
}: IssuseService.getAllParams = {}): Promise<IssuseService.getAllResponse[]> {
  const query = qs.stringify({
    state,
    page: 1,
    per_page: 300,
    sort: "created_at",
    direction: "desc"
  });
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues?${query}`
  );
  return request.data;
}

export async function getDetails({
  number
}: IssuseService.getDetailsParams): Promise<IssuseService.getDetailsResponse> {
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}/issues/${number}`
  );
  return request.data;
}

export async function getComments({
  number
}: IssuseService.getCommentsParams): Promise<
  IssuseService.getCommentsResponse[]
> {
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
