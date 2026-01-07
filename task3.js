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

    info()
    {
      console.log(`${this.getName} has reached level ${this.getLevel}!`);
    }
}

const jugador1 = new Player("Tara",6);
jugador1.info();