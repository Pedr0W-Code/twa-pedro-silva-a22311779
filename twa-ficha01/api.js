import { writeFile } from 'node:fs/promises';

const res = await fetch('https://api.github.com/repos/nodejs/node');

if (!res.ok) {
  throw new Error(`HTTP ${res.status}`);
}

const repo = await res.json();
const repoData = {
  name: repo.name,
  full_name: repo.full_name,
  description: repo.description,
  html_url: repo.html_url,
  stargazers_count: repo.stargazers_count,
  forks_count: repo.forks_count,
  created_at: repo.created_at,
  updated_at: repo.updated_at
};

await writeFile('repo.json', JSON.stringify(repoData, null, 2), 'utf8');
console.log(repo.name, repo.stargazers_count);