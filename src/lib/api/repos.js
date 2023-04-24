import { fetch } from 'ofetch'

const reposToFetch = [
  'commitlog',
  'preact-native',
  'alvu',
  'mark',
  'macscreens',
  'goblin',
  'preact-island-plugins',
]

export async function getTimeSortedRepos() {
  const data = await Promise.all(
    reposToFetch.map(x =>
      fetch(`https://ungh.cc/repos/barelyhuman/${x}`)
        .then(x => x.json())
        .then(x => x.repo)
    )
  )
  return data.sort(
    (x, y) => new Date(y.createdAt).getTime() - new Date(x.createdAt).getTime()
  )
}
