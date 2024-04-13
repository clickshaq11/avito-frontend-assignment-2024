import { ChangeEvent, useId } from 'react';
import { MenuItem, Select } from '@mui/material';
import { Input } from '@/components/Input';
import styles from '../../styles.module.css';
import { FiltersProps } from '../..';
import { useFilters } from '../../../FilterContext';

function LimitSelect() {
  const { searchParams, updateSearchParams } = useFilters();
  const id = useId();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchParams('limit', e.target.value);
    updateSearchParams('page', '1');
  };

  return (
    <div className={styles.label_container}>
      <label htmlFor={id} className={styles.label}>
        Количество фильмов на странице
      </label>
      <Select
        id={id}
        className={styles.limit}
        value={searchParams.get('limit')}
        onChange={onChange}
        input={<Input />}
      >
        {[10, 20, 30].map((amount) => (
          <MenuItem key={amount} value={amount}>
            {amount}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export { LimitSelect };
