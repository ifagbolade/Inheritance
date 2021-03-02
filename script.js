class Soccer {
    constructor(name) {
        this.name = name
    }
    score() {
        console.log(`${this.name} score`)
    }

    run() {
        console.log(`${this.name} run`)
    }
}

class GoalKeeperSoccer extends Soccer {
    block() {
        console.log(`${this.name} block`)
    }
}

class MidfielderSoccer extends Soccer {
    possession() {
        console.log(`${this.name} possession`)
    }
}

const player1 = new Soccer('player1')
player1.score()
player1.run()

const ManuelNeuer = new GoalKeeperSoccer('ManuelNeuer')
ManuelNeuer.score()
ManuelNeuer.run()
ManuelNeuer.block()

const CristianoRonaldo = new MidfielderSoccer('CristianoRonaldo')
CristianoRonaldo.score()
CristianoRonaldo.run()
CristianoRonaldo.possession()