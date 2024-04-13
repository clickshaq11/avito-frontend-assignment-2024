import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import {
  CircularProgress,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { axios } from '@/config/api';
import { useGetCountries } from './hooks/GetCountries';
import { useGetGenres } from './hooks/GetGenres';
import styles from './styles.module.css';
import { generateYearSelect } from '@/utils/generateYearSelect';
import type { GetMovieByIdResponse } from '@/types/search';

const yearSelect = generateYearSelect(1900);

function Random() {
  const navigate = useNavigate();

  const { data: possibleCountries, isSuccess: isGetCountriesSuccess } =
    useGetCountries();
  const { data: possibleGenres, isSuccess: isGetGenresSuccess } =
    useGetGenres();

  const [genres, setGenres] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);

  const [startYear, setStartYear] = useState<string>();
  const [endYear, setEndYear] = useState<string>();

  const handleChangeGenres = (event: SelectChangeEvent<typeof genres>) => {
    const {
      target: { value },
    } = event;
    setGenres(typeof value === 'string' ? value.split(',') : value);
  };

  const handleChangeCountries = (
    event: SelectChangeEvent<typeof countries>
  ) => {
    const {
      target: { value },
    } = event;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  const { data, refetch: getRandomFilm } = useQuery({
    queryFn: async () => {
      const params = new URLSearchParams();
      if (startYear && endYear) {
        params.append('year', `${startYear}-${endYear}`);
      }

      for (const genre of genres) {
        params.append('genres.name', genre);
      }

      for (const country of countries) {
        params.append('countries.name', country);
      }

      const { data } = await axios.get<GetMovieByIdResponse>('movie/random', {
        params,
      });

      return data;
    },
    enabled: false,
    onSuccess: (movie) => {
      if (movie) {
        navigate(`/movies/${movie.id}`);
      }
    },
  });

  if (!isGetCountriesSuccess || !isGetGenresSuccess) {
    return <CircularProgress />;
  }

  return (
    <section className={styles.box}>
      <h1>Случайный фильм</h1>
      <div className={styles.selectors}>
        <div className={styles.selector}>
          <label>Жанр</label>
          <Select
            multiple
            value={genres}
            onChange={handleChangeGenres}
            input={<OutlinedInput label="Жанр" />}
          >
            {possibleGenres.map(({ name }) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={styles.selector}>
          <label>Страна</label>
          <Select
            multiple
            value={countries}
            onChange={handleChangeCountries}
            input={<OutlinedInput label="Страна" />}
          >
            {possibleCountries.map(({ name }) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <div className={styles.selectors}>
        <div className={styles.selector}>
          <label>От</label>
          <Select
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            input={<OutlinedInput label="Жанр" />}
          >
            {yearSelect.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={styles.selector}>
          <label>До</label>
          <Select
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            input={<OutlinedInput label="Страна" />}
          >
            {yearSelect.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <button onClick={() => getRandomFilm()} className={styles.button}>
        Мне повезет!
      </button>
    </section>
  );
}

export { Random };
