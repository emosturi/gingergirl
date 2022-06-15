import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
/* I dont need to call window.innerWidth here below, innerWidth only will work,
since there is no other reference or scope other than window */
canvas.width = 1024
canvas.height = 576
const gravity = 1.8



class Player {
  constructor(){
    this.position = {
      x: 50,
      y: 50,
    }
    this.velocity = {
      x: 0,
      y: 0,
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
    if (this.position.y +
      this.height +
      this.velocity.y <= canvas.height) {
        this.velocity.y += gravity
      }


  }
}

class Platform {
  constructor({x, y, image}){
    this.position = {
      x,
      y,
    }
    this.width =  platformImage.width
    this.height = platformImage.height
    this.image = platformImage
  }

  draw(){
    ctx.drawImage(this.image, this.position.x, this.position.y)
  }
}

class GenericObject {
  constructor({x, y, image}){
    this.position = {
      x,
      y,
    }
    this.width = image.width
    this.height = image.height
    this.image = image
  }

  draw(){
    ctx.drawImage(this.image, this.position.x, this.position.y)
  }
}

let createImage = (imageSrc) => {
  const image = new Image()
  image.src= imageSrc
  return image
}

let player = new Player()

let platformImage = createImage(platform);
let backgroundImage = createImage(background);
let hillImage = createImage(hills);

let platforms = [
  new Platform({x:-1, y: 452, platformImage}),
  new Platform({x: platformImage.width-3, y: 452, image: platformImage}),
  new Platform({x: 2*platformImage.width+100, y: 452, image: platformImage}),
  new Platform({x: 3*platformImage.width+100-2, y: 452, image: platformImage}),
  new Platform({x: 4*platformImage.width+100-4, y: 452, image: platformImage}),
  new Platform({x: 5*platformImage.width+100-8, y: 452, image: platformImage}),
]

let genericObjects = [
  new GenericObject({x:-1, y: -1, image: backgroundImage}),
  new GenericObject({x: -1, y: 10, image: hillImage}),
]

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  }
}

let scrollTracker = 0

const init = () => {
  player = new Player()

  platformImage = createImage(platform);
  backgroundImage = createImage(background);
  hillImage = createImage(hills);

  platforms = [
    new Platform({x:-1, y: 452, platformImage}),
    new Platform({x: platformImage.width-3, y: 452, image: platformImage}),
    new Platform({x: 2*platformImage.width+100, y: 452, image: platformImage}),
    new Platform({x: 3*platformImage.width+100-2, y: 452, image: platformImage}),
    new Platform({x: 4*platformImage.width+100-4, y: 452, image: platformImage}),
    new Platform({x: 5*platformImage.width+100-8, y: 452, image: platformImage}),
  ]

  genericObjects = [
    new GenericObject({x:-1, y: -1, image: backgroundImage}),
    new GenericObject({x: -1, y: 10, image: hillImage}),
  ]

  scrollTracker = 0
}

const animate = () => {
  requestAnimationFrame(animate)
  ctx.fillStyle = 'white'
  ctx.fillRect(0,0, canvas.width, canvas.height)
  genericObjects.forEach(genericObject=>genericObject.draw())
  platforms.forEach(platform=>platform.draw())
  player.update()
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
      genericObjects.forEach(genericObject => genericObject.position.x -=2);
    }else if (keys.left.pressed) {
      scrollTracker -= 5
      platforms.forEach(platform=>platform.position.x += 5)
      genericObjects.forEach(genericObject => genericObject.position.x +=2);
    }
  }

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

  if (scrollTracker>2000) console.log('you win!')
  if (player.position.y > canvas.height) init()
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
