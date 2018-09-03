import githubApi from './github-api';

describe('github api test', () => {
  describe('get repo info', () => {
    test('should container user info', async () => {
      const result = await githubApi.getRepoInfo({
        username: 'nbsaw',
        repo: 'notes',
      });
      expect(result.owner.login).toEqual('Nbsaw');
      expect(result.name).toEqual('notes');
      expect(result.full_name).toEqual('Nbsaw/notes');
      expect(result.description).not.toBeNull();
      expect(result.owner.avatar_url).not.toBeNull();
    });
  });

  describe('get all issues', () => {
    test('state should be closed ', async () => {
      const result = await githubApi.issues.getAll({
        username: 'nbsaw',
        repo: 'notes',
        state: 'closed',
      });
      expect(result[0].state).toEqual('closed');
    });
    test('state should be open', async () => {
      const result = await githubApi.issues.getAll({
        username: 'nbsaw',
        repo: 'notes',
      });
      expect(result[0].state).toEqual('open');
    });
    test('issues datalis', async () => {
      const result = await githubApi.issues.getDetails({
        username: 'nbsaw',
        repo: 'notes',
        number: 10,
      });
      expect(result).not.toBeNull();
    });
  });
});
