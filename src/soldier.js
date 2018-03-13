import { Place } from './place'
import { Piece } from './piece'

class Soldier {
  constructor(attributes) {
    this.attributes = Object.assign({}, attributes)
  }

  get piece() {
    return this.attributes.piece
  }

  get place() {
    return this.attributes.place
  }

  get location() {
    return this.attributes.location
  }

  get promoted() {
    return !!this.attributes.promoted
  }

  set promoted(v) {
    this.attributes.promoted = v
  }

  get name() {
    if (this.promoted) {
      return this.piece.promoted_name
    }
    return this.piece.name
  }
}

export { Soldier }

if (process.argv[1] === __filename) {
  const soldier = new Soldier({
    place: new Place([1, 2]),
    piece: Piece.fetch("P"),
    promoted: true,
    location_key: "white",
  })
  console.log(soldier.name)
}