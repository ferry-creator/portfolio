import * as ctxRunner from './ctxRunner.js'

// chirp signal: f(t) =      2π·f0 + 2π·t²
// chirp sine w: s(t) = sin( 2π·f0 + 2π·t² )
// noise signal: r(x) = sin(8x) + sin(πx) + sin(ex)
// -----
// IDEA: chirp a continous noise signal!
// c(x) = r( f(x) )
// -----

const seed = Math.random()*1000000

const e   = 2.71828
const PI  = Math.PI
const TAU = 2*Math.PI
const sin = Math.sin
const abs = Math.abs

const A = 1, k = -0.05
let  f0 = 0
const chirp = (t) => TAU*f0 + TAU*k*(t*t)
const noise = (x) =>
  sin(8*x+seed) + sin(PI*x+seed) + sin(e*x+seed)
const combi = (x) => noise( chirp(x) )

const circle = (x,y,cx,cy,r) =>
  (((x-cx)*(x-cx)) + ((y-cy)*(y-cy))) * r

const setup = (ctx, w, h) => {
  ctx.loopPixels( (x,y) => {
    const u=x/w, v=y/h
    const col = u*v*256
    const r = col
    const g = col
    const b = col
    return [r,g,b, 256]
  })
}

const update = (ctx, w, h) => {
  const {cx, cy, radius} = props
  const hw=h/w, wh=w/h
  f0 = (ctx.elapsed/5000)
  ctx.loopPixels( (x,y) => {
    let u=0.5-(x/w), v=0.5-(y/h)
    w>h ? u *= wh : v *= hw
    const transform = circle(u,v,cx,cy,radius)
    const pulse = combi( transform ) * 64
    const r = pulse+Math.floor(Math.random()*64)
    const g = pulse+Math.floor(Math.random()*64)
    const b = pulse+Math.floor(Math.random()*64)
    return [r,g,b, 256]
  })
}

let props
export default (ctx, w, h, props_) => {
  props = props_
  ctxRunner.context(ctx, w, h)
  ctxRunner.init(setup)
  ctxRunner.loop(update)
  return ctxRunner.getAnimationFrameID()
}
