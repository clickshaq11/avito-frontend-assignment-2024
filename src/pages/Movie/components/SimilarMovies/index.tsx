import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { SimilarMovie } from '@/types/search';
import localStyles from './styles.module.css';
import styles from '../../styles.module.css';

type SimilarMoviesProps = {
  similarMovies: SimilarMovie[];
};

register();

function SimilarMovies({ similarMovies }: SimilarMoviesProps) {
  const swiperRef = useRef(null);
  const [params] = useSearchParams();

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      injectStyles: [
        `
          .swiper-slide-active {
            width: 250px;
          }
          .swiper-slide-next {
            width: 250px;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <article className={styles.article}>
      <h2>Похожие фильмы</h2>
      <swiper-container
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={2}
        class={localStyles.container}
        init="false"
      >
        {similarMovies.map(({ name, poster: { previewUrl }, id }) => (
          <swiper-slide key={previewUrl} class={localStyles.movie} style={{}}>
            <div className={localStyles.movie}>
              <div className={localStyles.heading}>
                <span className={localStyles.title}>{name}</span>
                <Link
                  to={{ pathname: `/movies/${id}`, search: params.toString() }}
                >
                  <OpenInNewIcon />
                </Link>
              </div>

              <img src={previewUrl} alt="Превью" className={localStyles.img} />
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </article>
  );
}

export { SimilarMovies };
