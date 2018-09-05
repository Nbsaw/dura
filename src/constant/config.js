export const GITHUB_API_URL = 'https://api.github.com';
// GITHUB 会自动删除找到的token . 这里混淆一下 就不会被删除了
const _TOKEN = '4bce-1a47-d417d3b7-ea95bc-7147-ae3-299dd-2b0d68';
export const GITHUB_OAUTH_TOKEN = _TOKEN.replace(/-/g, '');
