import { Link } from 'react-router-dom';
import { MoviePreview } from '@/types/movie';
import { section, row, link, title, img } from './block.module.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function MovieBlock({ name, id, poster: { previewUrl } }: MoviePreview) {
  return (
    <section className={section}>
      <div className={row}>
        <h3 className={title}>{name}</h3>
        <Link to={`/movies/${id}`} className={link} title="Перейти к фильму">
          <OpenInNewIcon />
        </Link>
        <img src={previewUrl} alt={`Постер к фильму ${name}`} className={img} />
      </div>
    </section>
  );
}

export { MovieBlock };
