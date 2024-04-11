import { MoviePreview } from './movie';

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

type GetMoviesResponse = {
  docs: MoviePreview[];
  total: number;
  limit: number;
  pages: number;
};

export type { SearchParams, GetMoviesResponse };
