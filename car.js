//1 - Batmobile

class Car {
    constructor (brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(nbr) {
        this.speed = this.speed + nbr
    }

    brake(nbr) {
        this.speed = this.speed - nbr
    }

    describe() {
        console.log(`${this.brand} is running at ${this.speed}km/h.`)
    }
}

var ford = new Car("Ford", 0)
ford.describe()
ford.accelerate(25)
ford.describe()
ford.brake(25)
ford.describe()

console.log("")

//2 - TV
let volTotal = 0

class TV {
    constructor (brand) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    increaseVol(vol) {
        volTotal = this.volume + vol
        if (volTotal <= 100) {
            this.volume = volTotal
        } else if (volTotal > 100) {
            this.volume = 100
        }
    }
    decreaseVol(vol) {
        volTotal = this.volume - vol
        if (volTotal  >= 0) {
            this.volume = volTotal
        } else if (volTotal < 0) {
            this.volume = 0
        }
    }
    changeChannel(chnl) {
        if (chnl >= 0 && chnl <= 50) {
            this.channel = chnl
        }
    }
    resetTV() {
        this.channel = 1
        this.volume = 50  
    }
    describe() {
        console.log(this.brand, this.channel, this.volume)
    }
}

var samsung = new TV("Samsung")
samsung.describe()
samsung.increaseVol(60)
samsung.describe()
samsung.decreaseVol(11)
samsung.describe()
samsung.changeChannel(4)
samsung.describe()
samsung.changeChannel(65)
samsung.describe()
samsung.resetTV()
samsung.describe()