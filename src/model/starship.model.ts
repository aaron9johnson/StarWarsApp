// Starship
// name string -- The name of this starship. The common name, such as "Death Star".
// model string -- The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
// starship_class string -- The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
// manufacturer string -- The manufacturer of this starship. Comma separated if more than one.
// cost_in_credits string -- The cost of this starship new, in galactic credits.
// length string -- The length of this starship in meters.
// crew string -- The number of personnel needed to run or pilot this starship.
// passengers string -- The number of non-essential people this starship can transport.
// max_atmosphering_speed string -- The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.
// hyperdrive_rating string -- The class of this starships hyperdrive.
// MGLT string -- The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
// cargo_capacity string -- The maximum number of kilograms that this starship can transport.
// consumables *string
// The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
// films array -- An array of Film URL Resources that this starship has appeared in.
// pilots array -- An array of People URL Resources that this starship has been piloted by.
// url string -- the hypermedia URL of this resource.
// created string -- the ISO 8601 date format of the time that this resource was created.
// edited string -- the ISO 8601 date format of the time that this resource was edited.

export interface IStarship {
  name?: string;
  model?: string;
  starship_class?: string;
  manufacturer?: string;
  cost_in_credits?: string;
  length?: string;
  crew?: string;
  passengers?: string;
  max_atmosphering_speed?: string;
  hyperdrive_rating?: string;
  MGLT?: string;
  cargo_capacity?: string;
  consumables?: string;
  films?: string[];
  pilots?: string[];
  url?: string;
  created?: string;
  edited?: string;
}

export class Starship implements IStarship {
  constructor(
    public name?: string,
    public model?: string,
    public starship_class?: string,
    public manufacturer?: string,
    public cost_in_credits?: string,
    public length?: string,
    public crew?: string,
    public passengers?: string,
    public max_atmosphering_speed?: string,
    public hyperdrive_rating?: string,
    public MGLT?: string,
    public cargo_capacity?: string,
    public consumables?: string,
    public films?: string[],
    public pilots?: string[],
    public url?: string,
    public created?: string,
    public edited?: string,
  ) {}
}
