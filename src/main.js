import { Dog, Cat, CleanOTron, KillOTron, MurderDogOTron } from './classes'

const sniffles = new Dog( 'sniffles' );
const fluffy = new Cat( 'Fluffy' );
const cleanBot = new CleanOTron( 'MODEL 1' );
const murderBot = new KillOTron( 'MODEL 2' );
const murderDogBot = new MurderDogOTron( 'MODEL CUJO' );

sniffles.bark();
sniffles.poop();

fluffy.meow();
fluffy.poop();

cleanBot.clean();
cleanBot.drive();

murderBot.kill();
murderBot.drive();

murderDogBot.bark();
murderDogBot.drive();
murderDogBot.kill();
