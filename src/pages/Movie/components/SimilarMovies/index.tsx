import { SimilarMovie } from '@/types/search';
import { movie_cn, carousel, img } from './movies.module.css';

type SimilarMoviesProps = {
  similarMovies: SimilarMovie[];
};

function SimilarMovies({ similarMovies }: SimilarMoviesProps) {
  return (
    <div className={carousel}>
      {similarMovies.map(({ name, poster: { previewUrl } }) => (
        <div key={previewUrl} className={movie_cn}>
          <span>{name}</span>
          <img src={previewUrl} alt="Превью" className={img} />
        </div>
      ))}
    </div>
  );
}

export { SimilarMovies };
