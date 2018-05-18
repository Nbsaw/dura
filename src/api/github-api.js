import { GITHUB_API_URL } from '../constant'
import { fetchGithubWithOauth } from './comman'
import qs from 'qs'

const github = {
  getRepoInfo: async ({ username, repo }) => {
    const request = await fetchGithubWithOauth.get(`${GITHUB_API_URL}/repos/${username}/${repo}`)
    const result = request.data
    return result
  },
  issues: {
    getAll: async ({ username, repo, state = 'open' }) => {
      const query = qs.stringify({ state })
      const request = await fetchGithubWithOauth.get(
        `${GITHUB_API_URL}/repos/${username}/${repo}/issues?${query}`
      )
      const result = request.data
      return result
    },
    getDetails: async ({ username, repo, number }) => {
      const request = await fetchGithubWithOauth.get(
        `${GITHUB_API_URL}/repos/${username}/${repo}/issues/${number}`
      )
      const result = request.data
      return result
    }
  }
}

export default github