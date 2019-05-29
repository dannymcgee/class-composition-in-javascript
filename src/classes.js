import compose from 'lodash/fp/compose'
import { Actor } from './actor'
import { Pooper, Barker, Meower, Driver, Cleaner, Killer } from './actions'

const DogActions = compose( Pooper, Barker )( Actor )
export class Dog extends DogActions {}

const CatActions = compose( Pooper, Meower )( Actor )
export class Cat extends CatActions {}

const CleanOTronActions = compose( Driver, Cleaner )( Actor )
export class CleanOTron extends CleanOTronActions {}

const KillOTronActions = compose( Driver, Killer )( Actor )
export class KillOTron extends KillOTronActions {}

const MurderDogOTronActions = compose( Driver, Killer, Barker )( Actor )
export class MurderDogOTron extends MurderDogOTronActions {}
