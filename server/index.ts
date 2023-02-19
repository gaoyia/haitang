import Koa from 'koa'
import KoaRouter from "koa-router";
import compress from 'koa-compress'
import { renderPage } from 'vite-plugin-ssr'
import { root } from './root.js'
const isProduction = process.env.NODE_ENV === 'production'

startServer()

async function startServer() {
  const app = new Koa()
  const router = new KoaRouter()

  app.use(compress())

  if (isProduction) {
    const sirv = (await import('sirv')).default
    app.use(async (ctx,next)=>{
      await (new Promise<void>((resolve)=>{
        sirv(`${root}/dist/client`)(ctx.req,ctx.res,resolve)
      }));
      await next()
    })
  } else {
    const vite = await import('vite')
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true }
      })
    ).middlewares
    app.use(async (ctx,next)=>{
      await (new Promise((resolve)=>{
        viteDevMiddleware(ctx.req,ctx.res,resolve)
      }));
      await next()
    })
  }

  router.get("/(.*)",async (ctx, next) => {
    const {req, res} = ctx
    const pageContextInit = {
      urlOriginal: ctx.originalUrl
    }
    const pageContext = await renderPage(pageContextInit)
    
    const { httpResponse } = pageContext
    
    if (!httpResponse) return next()
    const { body, statusCode, contentType, earlyHints } = httpResponse
    if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
    ctx.set('Content-Type',contentType)
    ctx.status = statusCode;
    ctx.body = body
    
    await next()
  });
  
  app.use(router.routes());
  app.use(router.allowedMethods());

  const port = process.env.PORT || 3000
  app.listen(port)
  console.info(`Server running at http://localhost:${port}`)
}
