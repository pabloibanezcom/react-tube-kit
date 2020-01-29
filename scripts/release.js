/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const Octokit = require('@octokit/rest');
const package = require('../package.json');

const octokit = new Octokit();

const start = async () => {
  const productionRes = await octokit.repos.getBranch({
    owner: 'pabloibanezcom',
    repo: 'react-tube-kit',
    branch: 'production'
  });
  const otherRes = await octokit.repos.getBranch({
    owner: 'pabloibanezcom',
    repo: 'react-tube-kit',
    branch: 'development-1'
  });
  const compareRes = await octokit.repos.compareCommits({
    owner: 'pabloibanezcom',
    repo: 'react-tube-kit',
    base: productionRes.data.commit.sha,
    head: otherRes.data.commit.sha
  });
  fs.writeFileSync('aux.json', JSON.stringify(compareRes.data));
  console.log(`Current version is ${package.version}`);
};

start();
