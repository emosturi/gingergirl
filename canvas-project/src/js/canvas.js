import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import platformTallImage from '../img/platformSmallTall.png';
import spriteRunLeft from '../img/RunLeft(20).png'
import spriteRunRight from '../img/RunRight(20).png'
import spriteIdleLeft from '../img/IdleLeft(16).png'
import spriteIdleRight from '../img/IdleRight(16).png'
import spriteJumpLeft from '../img/JumpLeft(30).png'
import spriteJumpRight from '../img/JumpRight(30).png'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
/* I dont need to call window.innerWidth here below, innerWidth only will work,
since there is no other reference or scope other than window */
canvas.width = 1024
canvas.height = 576
const gravity = 2.5



class Player {
  constructor(){
    this.position = {
      x: 250,
      y: 250,
    }
    this.velocity = {
      x: 0,
      y: 0,
    }
    this.speed = 10
    this.width = 416 *0.2
    this.height = 454 *0.2
    this.image = createImage(spriteIdleRight)
    this.frames = 0
  }

  draw() {
    ctx.drawImage(
      this.image,
      416 * this.frames,
      0,
      416,
      454,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }

  update() {
    this.frames++
    if(this.frames===16)this.frames=0
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
    this.width =  image.width
    this.height = image.height
    this.image = image
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
let platformTall = createImage(platformTallImage);
let backgroundImage = createImage(background);
let hillImage = createImage(hills);

let platforms = []

let genericObjects = []

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
  platformTall = createImage(platformTallImage);
  backgroundImage = createImage(background);
  hillImage = createImage(hills);

  platforms = [
    new Platform({x:-1, y: 452, image:platformImage}),
    new Platform({x: 6*platformImage.width+100-platformTall.width-8, y: 300, image: platformTall}),
    new Platform({x: platformImage.width-3, y: 452, image: platformImage}),
    new Platform({x: 2*platformImage.width+100, y: 452, image: platformImage}),
    new Platform({x: 3*platformImage.width+100-2, y: 452, image: platformImage}),
    new Platform({x: 4*platformImage.width+100-4, y: 452, image: platformImage}),
    new Platform({x: 5*platformImage.width+100-8, y: 452, image: platformImage}),
    new Platform({x: 6*platformImage.width+400, y: 452, image: platformImage}),
    new Platform({x: 7*platformImage.width+650, y: 452, image: platformImage}),
  ]

  genericObjects = [
    new GenericObject({x:-1, y: -1, image: backgroundImage}),
    new GenericObject({x: -1, y: 10, image: hillImage}),
  ]

  scrollTracker = 0
}

init()

const animate = () => {
  requestAnimationFrame(animate)
  ctx.fillStyle = 'white'
  ctx.fillRect(0,0, canvas.width, canvas.height)
  genericObjects.forEach(genericObject=>genericObject.draw())
  platforms.forEach(platform=>platform.draw())
  player.update()
  // SIDEWAYS MOVEMENT CONDITIONING
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed
  }else if (
    (keys.left.pressed &&
    player.position.x > 100)
    ||
    (keys.left.pressed &&
    scrollTracker === 0 &&
    player.position.x > 0)) {
    player.velocity.x = -player.speed
  }else {
    player.velocity.x = 0
    if (keys.right.pressed) {
      scrollTracker +=player.speed
      platforms.forEach(platform=>platform.position.x -=player.speed)
      genericObjects.forEach(genericObject => genericObject.position.x -= player.speed*0.66);
    }else if (keys.left.pressed && scrollTracker > 0) {
      scrollTracker -= player.speed
      platforms.forEach(platform=>platform.position.x +=player.speed)
      genericObjects.forEach(genericObject => genericObject.position.x += player.speed*0.66);
    }
  }

  // PLATFORM BEHAVIOUR CONDITIONING
  platforms.forEach(platform=>{
    if (
      player.position.y-2 +
      player.height +
      player.velocity.y >= platform.position.y
      &&
      player.position.y-2 +
      player.height <= platform.position.y
      &&
      player.position.x +
      player.width >= platform.position.x
      &&
      player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0
    }
  })

  if (scrollTracker>4750) console.log('you win!')
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
