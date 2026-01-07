export class Player 
{

  name;
  level;
  expPoints;

    constructor(name,level,expPoints) 
    {
      this.name = name;
      this.level = level;
      this.expPoints = expPoints;
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

    set setExpPoints(expPoints)
    {
      this.expPoints = expPoints;
    }

    get getExpPoints()
    {
      return this.expPoints;
    }

    info()
    {
      console.log(`Puntos de experiencia de ${this.getName}: ${this.expPoints}.`);
    }
    levelUp()
    {
      while(this.expPoints>=100)
      {
      this.level = this.level + 1;
      console.log(`${this.getName} has reached level ${this.getLevel}!`);
      this.expPoints = this.expPoints - 100;
      }
    }
}

const jugador1 = new Player("Tara",7,550);
jugador1.levelUp();
jugador1.info();