import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '@/hooks/useDebounce';
import { Filters } from './components/Filters';
import { axios, axiosV1 } from '@/config/api';
import ReplayIcon from '@mui/icons-material/Replay';
import CircularProgress from '@mui/material/CircularProgress';
import { MovieBlock } from '@/components/MovieBlock';
import type { GetMoviesResponse, SearchParams } from '@/types/search';
import type { PossibleCountriesResponse } from '@/types/fields';
import { grid, error_message, error_container } from './movies.module.css';

const defaultSearchParamsValue: Record<SearchParams, string> = {
  query: '',
  page: '1',
  limit: '10',
  'countries.name': 'Avstraliya',
  year: '2023',
  ageRating: '12',
  'year.enabled': 'false',
  'country.enabled': 'false',
  'age.enabled': 'false',
};

const DEBOUNCE_DELAY = 1000;

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams(
    defaultSearchParamsValue
  );

  const debouncedSearchParams = useDebounce(searchParams, DEBOUNCE_DELAY);

  const updateSearchParams = (param: SearchParams, value: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set(param, value);
      return newParams;
    });
  };

  const {
    data: moviesData,
    isSuccess: isGetMoviesSuccess,
    refetch: refetchMoviesQuery,
    isError: isGetMoviesError,
  } = useQuery<GetMoviesResponse>({
    queryFn: async ({ signal }) => {
      const actualSearchParams = new URLSearchParams();
      actualSearchParams.set('query', debouncedSearchParams.get('query'));
      actualSearchParams.set('page', debouncedSearchParams.get('page'));
      actualSearchParams.set('limit', debouncedSearchParams.get('limit'));

      if (debouncedSearchParams.get('year.enabled') === 'true') {
        actualSearchParams.set('year', debouncedSearchParams.get('year'));
      }

      if (debouncedSearchParams.get('country.enabled') === 'true') {
        actualSearchParams.set(
          'countries.name',
          debouncedSearchParams.get('countries.name')
        );
      }

      if (debouncedSearchParams.get('age.enabled') === 'true') {
        actualSearchParams.set(
          'ageRating',
          debouncedSearchParams.get('ageRating')
        );
      }

      const { data } = await axios.get<GetMoviesResponse>('movie/search', {
        params: actualSearchParams,
        signal,
      });

      return data;
    },
    cacheTime: 0,
    staleTime: 0,
    queryKey: ['movies', ...debouncedSearchParams.entries()],
  });

  const {
    data: countriesPossibleValues,
    isSuccess: isPossibleCountriesSuccess,
    refetch: refetchPossibleCountries,
    isError: isPossibleCountriesError,
  } = useQuery<PossibleCountriesResponse>({
    queryFn: async ({ signal }) => {
      const { data } = await axiosV1.get<PossibleCountriesResponse>(
        'movie/possible-values-by-field?field=countries.name',
        {
          signal,
        }
      );
      return data;
    },
    queryKey: ['countries'],
    cacheTime: Infinity,
  });

  const refetch = () => {
    refetchMoviesQuery();
    if (!isPossibleCountriesSuccess) {
      refetchPossibleCountries();
    }
  };
  const noMoviesFound = !moviesData || moviesData.docs.length === 0;

  if (isGetMoviesError || isPossibleCountriesError) {
    return (
      <div className={error_container}>
        <p className={error_message}>
          При запросе произошла ошибка. Повторите попытку.
        </p>
        <button onClick={refetch}>
          <ReplayIcon />
        </button>
      </div>
    );
  }

  return (
    <>
      <Filters
        totalPages={moviesData?.pages || 1}
        searchParams={searchParams}
        updateSearchParams={updateSearchParams}
        countriesPossibleValues={countriesPossibleValues}
      />
      {isGetMoviesSuccess ? (
        <div className={grid}>
          {noMoviesFound ? (
            <p className={error_message}>
              Фильмов по такому запросу не найдено. Попробуйте изменить фильтры
            </p>
          ) : (
            moviesData.docs?.map((movie) => (
              <MovieBlock {...movie} key={movie.id} />
            ))
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export { Movies };
