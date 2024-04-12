import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { axios } from '@/config/api';
import { GetMovieByIdResponse } from '@/types/search';
import {
  title,
  desc,
  text,
  ratings,
  poster_img,
  grid,
  container,
} from './movie.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import { Actors } from './components/Actors';
import { Series } from './components/Series';
import { Reviews } from './components/Reviews';
import { SimilarMovies } from './components/SimilarMovies';

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
    <div className={container}>
      <div className={grid}>
        <div>
          <h1 className={title}>{name}</h1>
          <p className={desc}>{description}</p>
        </div>
        <img
          src={poster.url}
          alt={`Постер к фильму ${name}`}
          className={poster_img}
        />
      </div>
      <div className={ratings}>
        <span className={text}>Рейтинг на кинопоиске</span>
        <Rating value={rating.kp} readOnly max={10} />
        <span className={text}>Рейтинг на IMDB</span>
        <Rating value={rating.imdb} readOnly max={10} />
      </div>
      <Actors movieId={parseInt(movieId)} />
      <Series movieId={parseInt(movieId)} />
      <Reviews movieId={parseInt(movieId)} />
      <SimilarMovies similarMovies={movieData.similarMovies} />
    </div>
  );
}

export { Movie };
