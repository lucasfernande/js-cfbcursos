// a palavra "static" define um membro estático para a classe
// esses membros não são chamados nas instâncias da classe, e sim na própria classe

class NPC {
    static alerta = false
    constructor(hp) {
        this.hp = hp
    }

    info = function() {
        console.log(`HP: ${this.hp} - ${NPC.alerta ? 'Sim' : 'Não'}`)
    }

    static alertar = () => {
        NPC.alerta = true
    }
}

let npc1 = new NPC(100)
let npc2 = new NPC(150)

NPC.alertar() // muda o "alerta" de todas as instâncias para true 

npc1.info()
npc2.info()

