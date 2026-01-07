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
    addMember()
    {
      grupo.push(this);
    }

}
const grupo = [];
const jugador1 = new Player("Tara",7,250);
const jugador2 = new Player("Bill",3,103);
const jugador3 = new Player("Kim",10,98);
jugador1.addMember();
jugador2.addMember();
jugador3.addMember();
jugador1.levelUp();
jugador1.info();
jugador2.levelUp();
jugador2.info();
jugador3.levelUp();
jugador3.info();
console.log(grupo)