export const Pooper = superclass =>
	class extends superclass
	{
		poop ()
		{
			console.log( `${this.name} just ruined your carpet 💩` )
		}
	}

export const Barker = superclass =>
	class extends superclass
	{
		bark ()
		{
			console.log( `Woof, I am ${this.name}` )
		}
	}

export const Meower = superclass =>
	class extends superclass
	{
		meow ()
		{
			console.log( `Meow, I am ${this.name}` )
		}
	}

export const Driver = superclass =>
	class extends superclass
	{
		position;
		speed;

		drive ()
		{
			console.log( 'Vroom vroom!' )
			this.position += this.speed
		}
	}

export const Cleaner = superclass =>
	class extends superclass
	{
		clean ()
		{
			console.log( `${this.name} cleaned up all the poop!` )
		}
	}

export const Killer = superclass =>
	class extends superclass
	{
		kill ()
		{
			console.log( `${this.name} will KILL, KILL, KILL THE POOPERS` )
		}
	}
