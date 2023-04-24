import presetTailwind from '@twind/preset-tailwind'
import presetAutoprefix from '@twind/preset-autoprefix'
import { defineConfig, extract, install } from '@twind/core'
import { toStatic } from 'hoofd/preact'
import { extractCss } from 'goober'
import { setup } from 'goober'
import { h } from 'preact'
import recast from 'recast'

function gooberPlugin(plug) {
  plug.setup = () => {
    setup(h)
  }

  plug.render = componentTree => {
    componentTree.head.push(`<style id="_goober">${extractCss()}</style>`)
    return componentTree
  }

  plug.injectOnClient = mod => {
    const toInject = recast.parse(`import {setup} from "goober"; setup(h);`)
    toInject.program.body = toInject.program.body.concat(mod.program.body)
    return toInject
  }
}

function twindPlugin(plug) {
  plug.setup = () => {
    const config = defineConfig({
      presets: [presetTailwind(), presetAutoprefix()],
    })
    install(config)
  }

  plug.render = componentTree => {
    const { html, css } = extract(componentTree.body.join('\n'))
    return {
      head: [
        `<style>
          ${css}
        </style>`,
      ],
      body: [html],
    }
  }
}

function hoofdPlugin(plug) {
  plug.render = componentTree => {
    const { metas, links, title } = toStatic()
    componentTree.head.push(stringifyHoofd(title, metas, links))
    return componentTree
  }
}

const stringifyHoofd = (title, metas, links) => {
  const stringifyTag = (tagName, tags) =>
    tags.reduce((acc, tag) => {
      ;`${acc}<${tagName}${Object.keys(tag).reduce(
        (properties, key) => `${properties} ${key}="${tag[key]}"`,
        ''
      )}>`
    }, '')

  return `
    <title>${title}</title>
    ${stringifyTag('meta', metas)} 
    ${stringifyTag('link', links)}
  `
}

export default [
  twindPlugin,
  hoofdPlugin,
  // gooberPlugin
]
