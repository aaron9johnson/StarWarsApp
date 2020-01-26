// Species
// name string -- The name of this species.
// classification string -- The classification of this species, such as "mammal" or "reptile".
// designation string -- The designation of this species, such as "sentient".
// average_height string -- The average height of this species in centimeters.
// average_lifespan string -- The average lifespan of this species in years.
// eye_colors string -- A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.
// hair_colors string -- A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.
// skin_colors string -- A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.
// language string -- The language commonly spoken by this species.
// homeworld string -- The URL of a planet resource, a planet that this species originates from.
// people array -- An array of People URL Resources that are a part of this species.
// films array -- An array of Film URL Resources that this species has appeared in.
// url string -- the hypermedia URL of this resource.
// created string -- the ISO 8601 date format of the time that this resource was created.
// edited string -- the ISO 8601 date format of the time that this resource was edited.

export interface ISpecies {
  name?: string;
  classification?: string;
  designation?: string;
  average_height?: string;
  average_lifespan?: string;
  eye_colors?: string;
  hair_colors?: string;
  skin_colors?: string;
  language?: string;
  homeworld?: string;
  people?: string[];
  films?: string[];
  url?: string;
  created?: string;
  edited?: string;
}

export class Species implements ISpecies {
  constructor(
    public name?: string,
    public classification?: string,
    public designation?: string,
    public average_height?: string,
    public average_lifespan?: string,
    public eye_colors?: string,
    public hair_colors?: string,
    public skin_colors?: string,
    public language?: string,
    public homeworld?: string,
    public people?: string[],
    public films?: string[],
    public url?: string,
    public created?: string,
    public edited?: string,
  ) {}
}
