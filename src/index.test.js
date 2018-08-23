const { expect } = require('chai');
const ghapi = require('./index');

describe('Users', () => {
  it('get should return a user object in JSON', async () => {
    let result = await ghapi.users.get('haydennyyy');
    expect(result).to.be.an('object');
  });
  it('getRepos should return an array of repositories', async () => {
    let result = await ghapi.users.getRepos('haydennyyy');
    expect(result).to.be.an('array');
  });
  it('getGists should return an array of gists', async () => {
    let result = await ghapi.users.getGists('haydennyyy');
    expect(result).to.be.an('array');
  });
  it('getFollowers should return an array of followers', async () => {
    let result = await ghapi.users.getFollowers('haydennyyy');
    expect(result).to.be.an('array');
  });
  it('getFollowing should return an array of following', async () => {
    let result = await ghapi.users.getFollowing('haydennyyy');
    expect(result).to.be.an('array');
  });
  it('getStarred should return an array of starred repos', async () => {
    let result = await ghapi.users.getStarred('haydennyyy');
    expect(result).to.be.an('array');
  });
  it('getSubscribed should return an array of subscribed repos', async () => {
    let result = await ghapi.users.getSubscribed('haydennyyy');
    expect(result).to.be.an('array');
  });
  it('getOrgs should return an array of orgs the user is in', async () => {
    let result = await ghapi.users.getOrgs('haydennyyy');
    expect(result).to.be.an('array');
  });
  it('getEvents should return an array of outgoing events', async () => {
    let result = await ghapi.users.getEvents('haydennyyy');
    expect(result).to.be.an('array');
  });
  it('getInboundEvents should return an array of inbound events', async () => {
    let result = await ghapi.users.getInboundEvents('haydennyyy');
    expect(result).to.be.an('array');
  });
});

describe('Repositories', () => {
  it('get should return the JSON from the request', async () => {
    let result = await ghapi.repos.get('haydennyyy/node-ghapi');
    expect(result).to.be.an('object');
  });
  it('getForks should return an array of forks', async () => {
    let result = await ghapi.repos.getForks('Microsoft/vscode');
    expect(result).to.be.an('array');
  });
  it('getAssignees should return an array of users', async () => {
    let result = await ghapi.repos.getAssignees('Microsoft/vscode');
    expect(result).to.be.an('array');
  });
  it('getBlobs should return an array of \'blobs\'', async () => {
    let result = await ghapi.repos.getBlobs('haydennyyy/node-ghapi', '09a899b58254f1bf1f215c7cec348bb5b64af57b');
    expect(result).to.be.an('array');
  });
  it('getBranches should return a list of branches', async () => {
    let result = await ghapi.repos.getBranches('Microsoft/vscode');
    expect(result).to.be.an('array');
  });
  it('getCollaborators should return a list of collaborators', async () => {
    let result = await ghapi.repos.getCollaborators('Microsoft/vscode');
    expect(result).to.be.an('array');
  });
  it('getComments should return an array of comments', async () => {
    let result = await ghapi.repos.getComments('Microsoft/vscode');
    expect(result).to.be.an('array');
  });
  it('getLanguages should return an array of languages used in the repo', async () => {
    let result = await ghapi.repos.getLanguages('Microsoft/vscode');
    expect(result).to.be.an('array');
  });
  it('getTopics should return an array of topics of the repository', async () => {
    let result = await ghapi.repos.getTopics('Microsoft/vscode');
    expect(result).to.be.an('array');
  });
  it('getTeams should return an array of teams from the repository', async () => {
    let result = await ghapi.repos.getTeams('Microsoft/vscode');
    expect(result).to.be.an('array');
  });
  it('getTags should return an array of tags from the repository', async () => {
    let result = await ghapi.repos.getTags('Microsoft/vscode');
    expect(result).to.be.an('array');
  });
});