import { useQuery } from 'react-query';
import { axiosV1 } from '@/config/api';
import { PossibleCountriesResponse } from '@/types/fields';

function useGetGenres() {
  return useQuery<PossibleCountriesResponse>({
    queryFn: async ({ signal }) => {
      const { data } = await axiosV1.get<PossibleCountriesResponse>(
        'movie/possible-values-by-field?field=genres.name',
        {
          signal,
        }
      );
      return data;
    },
    queryKey: ['genres'],
    cacheTime: Infinity,
  });
}

export { useGetGenres };
