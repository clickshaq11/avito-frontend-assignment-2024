import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { axios } from '@/config/api';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import { GetMovieByIdResponse } from '@/types/search';
import { Actors } from './components/Actors';
import { Series } from './components/Series';
import { Reviews } from './components/Reviews';
import { SimilarMovies } from './components/SimilarMovies';
import styles from './styles.module.css';
import { Ratings } from './components/Ratings';

function Movie() {
  const { movieId } = useParams();

  const { data: movieData, isSuccess: isGetMovieByIdSuccess } =
    useQuery<GetMovieByIdResponse>({
      queryFn: async ({ signal }) => {
        const { data } = await axios.get<GetMovieByIdResponse>(
          `movie/${movieId}`,
          {
            signal,
          }
        );

        return data;
      },
      queryKey: ['movie', movieId],
    });

  // TODO: clause
  if (!isGetMovieByIdSuccess) {
    return <CircularProgress />;
  }

  const { name, description, rating, poster } = movieData;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.textblock}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.desc}>{description}</p>
        </div>
        <img
          src={poster.url}
          alt={`Постер к фильму ${name}`}
          className={styles.poster_img}
        />
      </div>
      <Ratings rating={rating} />
      <Actors movieId={parseInt(movieId)} />
      <Series movieId={parseInt(movieId)} />
      <SimilarMovies similarMovies={movieData.similarMovies} />
      <Reviews movieId={parseInt(movieId)} />
    </div>
  );
}

export { Movie };
