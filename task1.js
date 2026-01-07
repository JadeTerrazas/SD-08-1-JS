export class Player 
{

  name;

    constructor(name) 
    {
      this.name = name;
    }
  
    set setName(name)
    {
      this.name = name;
    }

    get getName()
    {
      return this.name;
    }
}

const jugador1 = new Player("Tara");
console.log(jugador1.getName);