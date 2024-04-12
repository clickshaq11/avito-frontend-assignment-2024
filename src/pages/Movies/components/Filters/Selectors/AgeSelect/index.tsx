import { useId } from 'react';
import { MenuItem, Select } from '@mui/material';
import { AGE_SELECT } from '@/utils/generateAgeSelect';
import { Input } from '@/components/Input';
import { Switch } from '@/components/Switch';
import styles from '../../styles.module.css';
import type { FiltersProps } from '../..';

type AgeSelectProps = Pick<FiltersProps, 'searchParams' | 'updateSearchParams'>;

function AgeSelect({ searchParams, updateSearchParams }: AgeSelectProps) {
  const id = useId();
  return (
    <div className={styles.label_container}>
      <label htmlFor={id} className={styles.label}>
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
        className={styles.limit}
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
