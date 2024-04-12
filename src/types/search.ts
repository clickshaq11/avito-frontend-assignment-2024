import { MoviePreview } from './movie';

type PaginationParams = {
  total: number;
  limit: number;
  pages: number;
};

type SearchParams =
  | 'query'
  | 'page'
  | 'limit'
  | 'countries.name'
  | 'year'
  | 'ageRating'
  | 'country.enabled'
  | 'year.enabled'
  | 'age.enabled';

type GetMoviesResponse = PaginationParams & {
  docs: MoviePreview[];
};

type SimilarMovie = {
  id: number;
  name: string;
  poster: {
    previewUrl: string;
    url: string;
  };
};

type GetMovieByIdResponse = {
  name: string;
  description: string;
  rating: {
    kp: number;
    imdb: number;
  };
  poster: {
    url: string;
  };
  similarMovies: SimilarMovie[];
};

type Actor = {
  id: number;
  name: string;
  photo: string;
};

type GetActorsByMovieId = PaginationParams & {
  docs: Actor[];
};

type Episode = {
  number: number;
  name: string;
  description: string;
  date: string;
};

type Season = {
  name: string;
  number: number;
  episodesCount: number;
  episodes: Episode[];
};

type GetSeriesByMovieId = PaginationParams & {
  docs: Season[];
};

type ReviewType = 'Позитивный' | 'Нейтральный' | 'Негативный';

type Review = {
  author: string;
  type: ReviewType;
  title: string;
  review: string;
  date: string;
};

type GetReviewsByMovieId = PaginationParams & {
  docs: Review[];
};

export type {
  SearchParams,
  GetMoviesResponse,
  GetMovieByIdResponse,
  GetActorsByMovieId,
  Actor,
  GetSeriesByMovieId,
  Season,
  GetReviewsByMovieId,
  Review,
  ReviewType,
  SimilarMovie,
};
