class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque;
        if (this.tipo === "mago"){
            ataque = "magia"
        } else if(this.tipo === "guerreiro"){
            ataque = "espada"
        }else if(this.tipo === "monge"){
            ataque = "artes marciais"
        }else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
        console.log("------------------------------------------\n")
        
    }
}

const mago = new heroi("Geralt de Rivia", 100, "mago")
const guerreiro = new heroi("Genghis Khan", 35, "guerreiro")
const monge = new heroi("Aang", 12, "monge")
const ninja = new heroi("Itach Uchiha", 21, "ninja")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()
