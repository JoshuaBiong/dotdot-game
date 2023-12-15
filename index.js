const canvas = document.querySelector('canvas')
canvas.width = innerWidth
canvas.height = innerHeight

const cntx = canvas.getContext('2d');


// # classess
// Plaaaaayer
class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    drawn() {
        cntx.beginPath()
        cntx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        cntx.fillStyle = 'green'
        cntx.fill()
    }
}


const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 30, this.color)
player.drawn()


// Projectile from the Player
class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    drawn() {
        cntx.beginPath()
        cntx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        cntx.fillStyle = 'blue'
        cntx.fill()
    }

}



// console.log(player)

addEventListener('click', (event) => {
    // console.log(event.clientX)
    console.log(event)
    const projectile = new Projectile(event.clientX, event.clientY, 7, this.color, null)
    projectile.drawn()

})