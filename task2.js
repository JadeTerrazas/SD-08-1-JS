export class Player 
{

  name;
  level;

    constructor(name,level) 
    {
      this.name = name;
      this.level = level;
    }
  
    set setName(name)
    {
      this.name = name;
    }

    get getName()
    {
      return this.name;
    }

    set setLevel(level)
    {
      this.level = level;
    }

    get getLevel()
    {
      return this.level;
    }

    playerInfo()
    {
      return `Tu username es ${this.getName} y tu nivel es ${this.getLevel}.`
    }
}

const jugador1 = new Player("Tara",5);
console.log(jugador1.playerInfo());