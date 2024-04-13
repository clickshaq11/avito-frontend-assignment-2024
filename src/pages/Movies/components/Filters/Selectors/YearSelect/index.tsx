import { useId } from 'react';
import { useFilters } from '../../../FilterContext';
import { generateYearSelect } from '@/utils/generateYearSelect';
import { MenuItem, Select } from '@mui/material';
import { Input } from '@/components/Input';
import { Switch } from '@/components/Switch';
import styles from '../../styles.module.css';

function YearSelect() {
  const { searchParams, updateSearchParams } = useFilters();
  const id = useId();

  return (
    <div className={styles.label_container}>
      <label htmlFor={id} className={styles.label}>
        Год
      </label>
      <Switch
        checked={searchParams.get('year.enabled') === 'true'}
        onChange={(e) =>
          updateSearchParams('year.enabled', `${e.target.checked}`)
        }
      />
      <Select
        id={id}
        className={styles.limit}
        value={searchParams.get('year')}
        onChange={(e) => updateSearchParams('year', e.target.value)}
        input={<Input />}
      >
        {generateYearSelect(1900).map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export { YearSelect };
