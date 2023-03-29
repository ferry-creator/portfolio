import ctxRunnerFactory from './ctxRunner.js'
import palette from './palette.js'

export default () => {
  const ctxRunner = ctxRunnerFactory()
  const clamp  = (n,min,max) => Math.min(Math.max(n, min), max)
  const palMap = (value) => {
    const index = Math.floor((palette.length/256) * value)
    return palette[clamp(index,0,palette.length-1)]
  }

  // chirp signal: f(t) =      2π·f0 + 2π·t²
  // chirp sine w: s(t) = sin( 2π·f0 + 2π·t² )
  // noise signal: r(x) = sin(8x) + sin(πx) + sin(ex)
  // -----
  // IDEA: chirp a continous noise signal!
  // combine(x) = r( f(x) )
  // -----

  const seed = Math.random()*1000000

  const e   = 2.71828
  const PI  = Math.PI
  const TAU = 2*Math.PI
  const sin = Math.sin
  const cos = Math.cos
  const abs = Math.abs

  let A = 1, k = -0.05
  let  f0 = 0
  const chirp = (t) => TAU*f0 + TAU*k*(t*t)
  const noise = (x) =>
    sin(8*x+seed) + sin(PI*x+seed) + sin(e*x+seed)
  const combi = (x) => noise( chirp(x) )

  // spaces --------------------------------------
  const circle = (x,y,cx,cy,r) =>
    (((x-cx)*(x-cx)) + ((y-cy)*(y-cy))) * r

  const glitchSpace1 = (x,y,cx,cy,r) =>
    (sin(y-1)*((x-cx)*(x-cx)) + sin(10-x*4)*((y-cy)*(y-cy))) * r
  const glitchSpace2 = (x,y,cx,cy,r) =>
    abs((sin(y-1)*((x-cx)*(x-cx)) + sin(10-x*4)*((y-cy)*(y-cy)))) * r
  const glitchSpace3 = (x,y,cx,cy,r) =>
    (sin(y-1)*(sin((x-cx)*(x-cx))) + sin(x)*((y-cy)*(y-cy))) * r
  const glitchSpace4 = (x,y,cx,cy,r) => // invert k
    (sin(y-1)*(sin((x-cx*2)*(x-cx*2))) + cos(x)*((y-cy)*(y-cy))) * r
  const glitchSpace5 = (x,y,cx,cy,r) =>
    abs((((x-cx)*(x)) + ((y-cy)*(y)))) * r*4
  const glitchSpace6 = (x,y,cx,cy,r) =>
    (sin(x/100)*((x-cx)*(x-cx)) + cos(y*4)*((y-cy)*(y-cy))) * r
  const glitchSpace7 = (x,y,cx,cy,r,ctx) =>
    (((x-cx)*(x-cx)) +
    cos(3*y+(ctx.elapsed/800))*((y-cy)*(y-cy))) * r*2
  const glitchSpace8 = (x,y,cx,cy,r,ctx) =>
    (cos(1*y-(ctx.elapsed/800))*((x-cx)*(x-cx))
    + cos(3*y+(ctx.elapsed/800))*((y-cy)*(y-cy))) * r*2

  // ---------------------------------------------
  const states = ["circle", "glitch1", "glitch2", "glitch3",
    "glitch4", "glitch5", "glitch6", "glitch7", "glitch8" ]

  const randomState = (current_key="") => {
    const keys = states.filter((x)=>x!=current_key)
    return keys[ Math.floor(Math.random()*keys.length) ]
  }

  let space = null
  const updateState = (key, t) => {
    let nextT = 0
    console.log(key)
    switch(key) {
      case "glitch1": space=glitchSpace1, nextT=1000
      case "glitch2": space=glitchSpace2, nextT=1000
      case "glitch3": space=glitchSpace3, nextT=1000
      case "glitch4": space=glitchSpace4, nextT=1000
      case "glitch5": space=glitchSpace5, nextT=1000
      case "glitch6": space=glitchSpace6, nextT=1000
      case "glitch7": space=glitchSpace7, nextT=1000
      case "glitch8": space=glitchSpace8, nextT=1000
      default: space = circle
    }
    setTimeout(() => {
      updateState(randomState(key), nextT)
    }, t)
  }
  // updateState(randomState())
  space=circle

  const setup = (ctx, w, h) => {
  }

  let noiseLvl = 30

  const update = (ctx, w, h) => {
    const {cx, cy, radius} = props
    const hw=h/w, wh=w/h
    f0 = (ctx.elapsed/5000)
    ctx.loopPixels( (x,y) => {
      let u=0.5-(x/w), v=0.5-(y/h)
      w>h ? u *= wh : v *= hw
      const pulse = space(u,v,cx,cy,radius,ctx)
      let val = combi( pulse ) * 40
      val += pulse*60
      val += Math.floor(Math.random()*20)
      let [r,g,b] = palMap(val)
      r += Math.floor(Math.random()*noiseLvl)
      g += Math.floor(Math.random()*noiseLvl)
      b += Math.floor(Math.random()*noiseLvl)
      return [r,g,b, 256]
    })
  }

  let props
  return (ctx, w, h, props_) => {
    props = props_
    ctxRunner.context(ctx, w, h)
    ctxRunner.init(setup)
    ctxRunner.loop(update)
    return ctxRunner.getAnimationFrameID()
  }
}
