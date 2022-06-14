const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
/* I dont need to call window.innerWidth here below, innerWidth only will work,
since there is no other reference or scope other than window */
canvas.width = innerWidth
canvas.height = innerHeight

class Player {
  constructor(){
    this.position = {
      x: 100,
      y: 100,
    },
    this.width = 100
    this.height = 100
  }

  draw() {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

const player = new Player()
player.draw()
