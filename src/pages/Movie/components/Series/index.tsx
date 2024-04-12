import { useState } from 'react';
import { useQuery } from 'react-query';
import { axios } from '@/config/api';
import { CircularProgress } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view';
import { Pagination } from '../shared/Pagination';
import { MiniSeason } from './MiniSeason';
import { GetSeriesByMovieId } from '@/types/search';
import { ClientPaginationParams } from '@/types/pagination';
import {
  DEFAULT_PAGINATION_LIMIT,
  DEFAULT_PAGINATION_STATE,
} from '../../shared/const';
import styles from '../../styles.module.css';
import localStyles from './styles.module.css';

type SeriesProps = {
  movieId: number;
};

function Series({ movieId }: SeriesProps) {
  const [seriesPagination, setSeriesPagination] =
    useState<ClientPaginationParams>(DEFAULT_PAGINATION_STATE);

  const { data: seriesData, isSuccess } = useQuery<GetSeriesByMovieId>({
    queryFn: async ({ signal }) => {
      const { data } = await axios.get<GetSeriesByMovieId>(`season`, {
        signal,
        params: {
          page: seriesPagination.page,
          limit: DEFAULT_PAGINATION_LIMIT,
          movieId,
        },
      });

      return data;
    },
    queryKey: ['series', movieId, seriesPagination.page],
  });

  return (
    <>
      {isSuccess ? (
        <article className={styles.article}>
          <h2>Сезоны и серии</h2>
          {isSuccess && seriesData.docs.length === 0 ? (
            <span>Нет информации о сезонах</span>
          ) : (
            <div className={localStyles.list}>
              <SimpleTreeView>
                {seriesData.docs.map((season) => (
                  <MiniSeason key={season.number} {...season} />
                ))}
              </SimpleTreeView>
              <Pagination
                page={seriesPagination.page}
                onChange={(_, value) =>
                  setSeriesPagination((prev) => ({ ...prev, page: value }))
                }
              />
            </div>
          )}
        </article>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export { Series };
