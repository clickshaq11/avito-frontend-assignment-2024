import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FiltersProps } from '../..';
import styles from '../../styles.module.css';

type SearchSelectProps = Pick<
  FiltersProps,
  'searchParams' | 'updateSearchParams'
>;

function Search({ searchParams, updateSearchParams }: SearchSelectProps) {
  return (
    <TextField
      value={searchParams.get('query')}
      onChange={(e) => updateSearchParams('query', e.target.value)}
      variant="outlined"
      placeholder="Введите фильтр для поиска..."
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      className={styles.search}
    />
  );
}

export { Search };
