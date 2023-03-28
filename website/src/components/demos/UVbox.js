import * as ctxRunner from './ctxRunner.js'

const setup = (ctx, w, h) => {
  ctx.loopPixels( (x,y) => {
    const r = x * 256/w
    const g = y * 256/h
    const b = r
    return [r,g,b,256]
  })
}

const update = (ctx, w, h) => {
  
}

export default (ctx, w, h) => {
  ctxRunner.context(ctx, w, h)
  ctxRunner.init(setup)
  // ctxRunner.loop(update)
  return ctxRunner.getAnimationFrameID()
}
