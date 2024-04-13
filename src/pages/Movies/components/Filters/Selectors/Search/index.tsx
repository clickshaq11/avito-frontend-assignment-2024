import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useFilters } from '@/pages/Movies/components/FilterContext';
import styles from '../../styles.module.css';

function Search() {
  const { searchParams, updateSearchParams } = useFilters();

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
