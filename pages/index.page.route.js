import { resolveRoute } from 'vite-plugin-ssr/routing'

export default (pageContext) => {
  if (pageContext.urlPathname === '/' || pageContext.urlPathname === '/index' || pageContext.urlPathname === '/index.html') {
    return { routeParams: { view: 'index' } }
  }
  const result = resolveRoute('/@view', pageContext.urlPathname)
  if (!result.match) {
    return false
  }
  return result
}
