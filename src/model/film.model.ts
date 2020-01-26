// Films
// title string -- The title of this film
// episode_id integer -- The episode number of this film.
// opening_crawl string -- The opening paragraphs at the beginning of this film.
// director string -- The name of the director of this film.
// producer string -- The name(s) of the producer(s) of this film. Comma separated.
// release_date date -- The ISO 8601 date format of film release at original creator country.
// species array -- An array of species resource URLs that are in this film.
// starships array -- An array of starship resource URLs that are in this film.
// vehicles array -- An array of vehicle resource URLs that are in this film.
// characters array -- An array of people resource URLs that are in this film.
// planets array -- An array of planet resource URLs that are in this film.
// url string -- the hypermedia URL of this resource.
// created string -- the ISO 8601 date format of the time that this resource was created.
// edited string -- the ISO 8601 date format of the time that this resource was edited.

export interface IFilm {
  title?: string;
  episode_id?: number;
  opening_crawl?: string;
  director?: string;
  producer?: string;
  release_date?: Date;
  species?: string[];
  starships?: string[];
  vehicles?: string[];
  characters?: string[];
  planets?: string[];
  url?: string;
  created?: string;
  edited?: string;
}

export class Film implements IFilm {
  constructor(
    public id?: number,
    public title?: string,
    public episode_id?: number,
    public opening_crawl?: string,
    public director?: string,
    public producer?: string,
    public release_date?: Date,
    public species?: string[],
    public starships?: string[],
    public vehicles?: string[],
    public characters?: string[],
    public planets?: string[],
    public url?: string,
    public created?: string,
    public edited?: string
  ) {}
}
