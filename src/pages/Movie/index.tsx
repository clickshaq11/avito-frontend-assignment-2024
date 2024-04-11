import { useParams } from 'react-router';
import { axios } from '../../config/api';

function Movie() {
  const { movieId } = useParams();

  console.log(process.env.TOKEN);

  return <div>{movieId}</div>;
}

export { Movie };
