import { useId } from 'react';
import { MenuItem, Select } from '@mui/material';
import { AGE_SELECT } from '@/utils/generateAgeSelect';
import { Input } from '@/components/Input';
import { Switch } from '@/components/Switch';
import { label, limit, label_container } from '../../filters.module.css';
import type { FiltersProps } from '../..';

type AgeSelectProps = Pick<FiltersProps, 'searchParams' | 'updateSearchParams'>;

function AgeSelect({ searchParams, updateSearchParams }: AgeSelectProps) {
  const id = useId();
  return (
    <div className={label_container}>
      <label htmlFor={id} className={label}>
        Возраст
      </label>
      <Switch
        checked={searchParams.get('age.enabled') === 'true'}
        onChange={(e) =>
          updateSearchParams('age.enabled', `${e.target.checked}`)
        }
      />
      <Select
        id={id}
        className={limit}
        value={searchParams.get('ageRating')}
        onChange={(e) => updateSearchParams('ageRating', e.target.value)}
        input={<Input />}
      >
        {AGE_SELECT.map((age) => (
          <MenuItem key={age} value={age}>
            {age}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export { AgeSelect };
