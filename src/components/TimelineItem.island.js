export default function TimelineItem({ name, time, children }) {
  return (
    <div
      ref={node => {
        if (!node) return
        node.children[0].style.height = node.offsetHeight + 'px'
      }}
      class="flex items-center gap-2 min-h-[200px]"
    >
      <div class="relative flex flex-col items-center">
        <div
          ref={node => {
            const box = node.parentNode.nextSibling.getBoundingClientRect()
            const toAdd = node.getBoundingClientRect().y - box.y
            node.style.height = toAdd + 'px'
          }}
          class="h-4 w-[1px] bg-zinc-200"
        ></div>
        <div class="relative h-4 w-4 flex-none rounded-full bg-black drop-shadow-2xl">
          <p class="text-zinc-400 absolute right-7 top-[50%] translate-y-[-50%]">
            {time}
          </p>
        </div>
        <div class="h-full flex-1 w-[1px] bg-zinc-200"></div>
      </div>
      <div class="ml-10 py-6 flex flex-col w-full">
        <div>
          <h1 class="font-bold text-zinc-700">{name}</h1>
        </div>
        <div class="w-full">{children}</div>
      </div>
    </div>
  )
}
