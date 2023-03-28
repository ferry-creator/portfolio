let ctx, w, h
const context = (ctx_, w_, h_) => {
  ctx = ctx_
  w   = w_
  h   = h_
}

const init = (callback) => {
  utils() // extend ctx obj
  return callback(ctx, w, h)
}

let loopCB = null
const loop = (callback) => {
  loopCB = callback
  anim()
}

const t0 = new Date().getTime()
let prev = t0

let loopID = null // set globally in anim()
const anim = () => {
  loopID = window.requestAnimationFrame(anim)

  let current = new Date().getTime()
  ctx.dTime   = current - prev
  ctx.elapsed = current - t0
  prev = current

  // ctx.fps = ~~(1000/ctx.dTime)

  return loopCB(ctx, w, h)
}
// return the global loopID for cleanup etc
const getAnimationFrameID = () => loopID

export { context, init, loop, getAnimationFrameID }

// ------------------------------------------------
// ------------------------------------------------

const utils = () => {
  ctx.clear = () => ctx.clearRect(0, 0, w, h);
  
  // update all pixels with callback (cb)
  // cb args: x,y | must return [R,G,B,A]
  ctx.loopPixels = (cb) => {
    const id = ctx.getImageData(0, 0, w, h)
    const pixels = id.data
    for (var i = 0; i < w*h; i++) {
      const x =            i%w
      const y = Math.floor(i/w)
      const [R,G,B,A] = cb(x,y)
      const idx = i * 4
      pixels[idx  ] = R
      pixels[idx+1] = G
      pixels[idx+2] = B
      pixels[idx+3] = A
    }
    ctx.putImageData(id, 0, 0);
  }

  // update n pixels with cb
  // cb must return [x,y,R,G,B,A]
  ctx.setPixels = (n, cb) => {
    const id = ctx.getImageData(0, 0, w, h)
    const pixels = id.data
    for (var i = 0; i < n; i++) {
      const [x,y,R,G,B,A] = cb()
      var idx = (y*w + x) * 4
      pixels[idx  ] = R
      pixels[idx+1] = G
      pixels[idx+2] = B
      pixels[idx+3] = A
    }
    ctx.putImageData(id, 0, 0);
  }
}
