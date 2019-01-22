import { config, me } from '../../../constant';
import axios from 'axios';
import { fetchGithubWithOauth } from '../../comman';

const { USERNAME, REPO } = me;
const { GITHUB_API_URL, CLIENTID, CLIENTSECRET } = config;

export async function getUserInfo() {
  const res = await axios({ url: `${GITHUB_API_URL}/users/${USERNAME}` });
  return res.data;
}

export async function getAccessToken(code: string) {
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
}

export async function getRepoInfo() {
  const request = await fetchGithubWithOauth.get(
    `${GITHUB_API_URL}/repos/${USERNAME}/${REPO}`
  );
  const result = request.data;
  return result;
}
