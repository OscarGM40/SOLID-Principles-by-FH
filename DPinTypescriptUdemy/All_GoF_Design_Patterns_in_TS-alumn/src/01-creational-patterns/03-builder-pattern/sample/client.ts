// the client can now ask for any construction available

import CastleDirector from './castle-director'
import HouseBoatDirector from './house-boat.director'
import IglooDirector from './igloo-director'

const IGLOO_ONE = IglooDirector.construct()
console.log(IGLOO_ONE.construction())

const CASTLE_ONE = CastleDirector.construct()
console.log(CASTLE_ONE.construction())

const HOUSEBOAT_ONE = HouseBoatDirector.construct()
console.log(HOUSEBOAT_ONE.construction())

//this pattern is super simple and can come in handy in many situations yet it looks more oriented to backend
