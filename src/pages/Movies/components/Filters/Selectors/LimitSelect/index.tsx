import { ChangeEvent, useId } from 'react';
import { MenuItem, Select } from '@mui/material';
import { Input } from '@/components/Input';
import { label, limit, label_container } from '../../filters.module.css';
import { FiltersProps } from '../..';

type LimitSelectProps = Pick<
  FiltersProps,
  'searchParams' | 'updateSearchParams'
>;

function LimitSelect({ searchParams, updateSearchParams }: LimitSelectProps) {
  const id = useId();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchParams('limit', e.target.value);
    updateSearchParams('page', '1');
  };

  return (
    <div className={label_container}>
      <label htmlFor={id} className={label}>
        Количество фильмов на странице
      </label>
      <Select
        id={id}
        className={limit}
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
