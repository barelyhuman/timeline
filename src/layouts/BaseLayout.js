import GlobalStyles from '@/components/GlobalStyles.island'
import { useTitle } from '@/lib/head'

export default function BaseLayout({ title, children }) {
  useTitle(title || 'Preact Island Example')
  return (
    <>
      {/*<GlobalStyles />*/}
      <div class="max-w-3xl px-2 mx-auto">{children}</div>
    </>
  )
}
