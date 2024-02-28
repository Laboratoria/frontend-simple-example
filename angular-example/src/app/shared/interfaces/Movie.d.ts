export type Movie = {
    id: string;
    title: string;
    poster: string;
    release_date: string;
}

export type MovieData = {
    studio: String;
    films: Movie[];
}
