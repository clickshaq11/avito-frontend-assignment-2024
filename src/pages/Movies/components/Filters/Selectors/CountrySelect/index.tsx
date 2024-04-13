import { useId } from 'react';
import { useFilters } from '../../../FilterContext';
import { MenuItem, Select } from '@mui/material';
import { Input } from '@/components/Input';
import { Switch } from '@/components/Switch';
import styles from '../../styles.module.css';
import type { FiltersProps } from '../..';

type CountrySelectProps = Pick<FiltersProps, 'countriesPossibleValues'>;

function CountrySelect({ countriesPossibleValues }: CountrySelectProps) {
  const { searchParams, updateSearchParams } = useFilters();
  const id = useId();

  return (
    <div className={styles.label_container}>
      <label htmlFor={id} className={styles.label}>
        Страна
      </label>
      <Switch
        checked={searchParams.get('country.enabled') === 'true'}
        onChange={(e) =>
          updateSearchParams('country.enabled', `${e.target.checked}`)
        }
      />
      <Select
        id={id}
        className={styles.limit}
        value={searchParams.get('countries.name')}
        onChange={(e) => updateSearchParams('countries.name', e.target.value)}
        input={<Input />}
      >
        {countriesPossibleValues?.map(({ name, slug }) => (
          <MenuItem key={slug} value={slug}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export { CountrySelect };
