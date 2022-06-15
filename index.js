const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
/* I dont need to call window.innerWidth here below, innerWidth only will work,
since there is no other reference or scope other than window */
canvas.width = innerWidth
canvas.height = innerHeight
const gravity = 1.8

class Player {
  constructor(){
    this.position = {
      x: 50,
      y: 50,
    }
    this.velocity = {
      x: 0,
      y: 1,
    }
    this.width = 30
    this.height = 30
  }

  draw() {
    ctx.fillStyle = 'red'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    console.log(this.position.y + this.velocity.y + this.height + '-' + canvas.height);
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      console.log('normal');
      this.velocity.y += gravity
    }else this.velocity.y = 0

  }
}

class Platform {
  constructor({x, y, width=500, height=40}){
    this.position = {
      x,
      y,
    }
    this.width = width
    this.height = height
  }

  draw(){
    ctx.fillStyle = 'blue'
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height)
  }
}

const player = new Player()

const platforms = [
  new Platform({x:300, y:400}),
  new Platform({x: 700, y: 500, width: 300, height: 20}),
]

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  }
}

var scrollTracker = 0

const animate = () => {
  requestAnimationFrame(animate)
  ctx.clearRect(0,0, canvas.width, canvas.height)
  player.update()
  platforms.forEach(platform=>platform.draw())
  // SIDEWAYS MOVEMENT CONDITIONING
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 10
  }else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -10
  }else {
    player.velocity.x = 0
    if (keys.right.pressed) {
      scrollTracker += 5
      platforms.forEach(platform=>platform.position.x -= 5)
    }else if (keys.left.pressed) {
      scrollTracker -= 5
      platforms.forEach(platform=>platform.position.x += 5)
    }
  }

  console.log(scrollTracker);

  // PLATFORM BEHAVIOUR CONDITIONING
  platforms.forEach(platform=>{
    if (
      player.position.y +
      player.height +
      player.velocity.y >= platform.position.y
      &&
      player.position.y +
      player.height <= platform.position.y
      &&
      player.position.x +
      player.width >= platform.position.x
      &&
      player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0
    }
  })

  if (scrollTracker>2000) {
    console.log('you win!');
  }
}

animate()
/* Once again I dont need to call window.addEventListener here below,
addEventListener only will work,
since there is no other reference or scope other than window */
addEventListener('keydown', ({keyCode})=>{
  switch (keyCode) {
    case 37:
      keys.left.pressed = true
      break

    case 39:
      keys.right.pressed = true
      break

    case 38:
      player.velocity.y -= 30
      break

    case 40:
      break
  }
})

addEventListener('keyup', ({keyCode})=>{
  switch (keyCode) {
    case 37:
      keys.left.pressed = false
      break

    case 39:
      keys.right.pressed = false
      break

    case 38:
      break

    case 40:
      break
  }
})
