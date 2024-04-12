import { useQuery } from 'react-query';
import { GetActorsByMovieId } from '../../../../types/search';
import { useState } from 'react';
import { ClientPaginationParams } from '../../../../types/pagination';
import { CircularProgress, Pagination } from '@mui/material';
import { MiniActor } from './MiniActor';
import { list, section_name, article } from '../../movie.module.css';
import {
  DEFAULT_PAGINATION_LIMIT,
  DEFAULT_PAGINATION_STATE,
} from '../../shared/const';
import { axios } from '../../../../config/api';

type ActorsProps = {
  movieId: number;
};

function Actors({ movieId }: ActorsProps) {
  const [actorsPagination, setActorsPagination] =
    useState<ClientPaginationParams>(DEFAULT_PAGINATION_STATE);

  const { data: actorsData, isSuccess } = useQuery<GetActorsByMovieId>({
    queryFn: async ({ signal }) => {
      const { data } = await axios.get<GetActorsByMovieId>(`person`, {
        signal,
        params: {
          page: actorsPagination.page,
          limit: DEFAULT_PAGINATION_LIMIT,
          'movies.id': movieId,
        },
      });

      return data;
    },
    queryKey: ['actors', movieId, actorsPagination.page],
  });

  return (
    <>
      {isSuccess ? (
        <article className={article}>
          <h2 className={section_name}>Актёры</h2>
          <div className={list}>
            {actorsData.docs
              ?.filter((actor) => actor.name)
              .map((actor) => <MiniActor key={actor.id} {...actor} />)}
          </div>
          <Pagination
            page={actorsPagination.page}
            onChange={(_, value) =>
              setActorsPagination((prev) => ({ ...prev, page: value }))
            }
          />
        </article>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export { Actors };
