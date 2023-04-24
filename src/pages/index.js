import BaseLayout from '@/layouts/BaseLayout'
import TimelineItem from '@/components/TimelineItem.island'
import { getTimeSortedRepos } from '@/lib/api/repos'

export async function get(req, res) {
  const data = await getTimeSortedRepos()
  return (
    <BaseLayout title="Home">
      {data.map(x => (
        <TimelineItem
          name={`${x.name}`}
          time={new Date(x.createdAt).toLocaleDateString()}
        >
          <p class="text-zinc-500">
            <a class="underline" href={'https://ungh.cc/repos/' + x.repo}>
              {x.repo}
            </a>
          </p>
          <p class="text-zinc-500">{x.description}</p>
          <div class="w-full flex gap-4 justify-end items-center text-zinc-600">
            <p class="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-star"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
              </svg>
              {x.stars}
            </p>
            <p class="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-git-fork"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"></path>
                <path d="M12 12l0 4"></path>
              </svg>
              {x.forks}
            </p>
            <p class="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-git-commit"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M12 3l0 6"></path>
                <path d="M12 15l0 6"></path>
              </svg>
              {new Date(x.pushedAt).toLocaleString()}
            </p>
          </div>
        </TimelineItem>
      ))}
    </BaseLayout>
  )
}
