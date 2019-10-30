const Space = function() {
    this.screen  = document.getElementById("screen")
    this.context = this.screen.getContext("2d")
    this.planets = [
        {name:"earth",color:"blue", x:200, y:200, size : 20 },
        {name:"mars",color:"red", x:300, y:300, size : 10 },
    ]

    this.stars = [
        {name:"sum",color:"yellow", x:450, y:450, size : 100 },
    ]

    this.render = () => {
        this.cleanScreen()
        this.renderPlanets()
        this.renderStars()
        requestAnimationFrame(this.render)
    }

    this.renderPlanets = () => {
        for(let i in this.planets) {
            this.draw(this.planets[i])
        }
    }

    this.renderStars = () => {
        for(let i in this.stars) {
            this.draw(this.stars[i])
        }
    }

    this.draw = (ob) => {
        this.context.beginPath()
        this.context.arc(ob.x, ob.y, ob.size, 0, 2 * Math.PI)
        this.context.fillStyle = ob.color
        this.context.strokeStyle = ob.color
        this.context.stroke()
        this.context.fill()
    }

    this.cleanScreen = () => {
        this.context.fillStyle = "black"
        this.context.fillRect(0,0,1000,1000)
    }
}

let s = new Space()
s.render()