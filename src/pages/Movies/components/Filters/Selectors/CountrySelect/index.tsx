import { useId } from 'react';
import { MenuItem, Select } from '@mui/material';
import { Input } from '@/components/Input';
import { Switch } from '@/components/Switch';
import { label, limit, label_container } from '../../filters.module.css';
import type { FiltersProps } from '../..';

type CountrySelectProps = Pick<
  FiltersProps,
  'searchParams' | 'updateSearchParams' | 'countriesPossibleValues'
>;

function CountrySelect({
  searchParams,
  updateSearchParams,
  countriesPossibleValues,
}: CountrySelectProps) {
  const id = useId();
  return (
    <div className={label_container}>
      <label htmlFor={id} className={label}>
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
        className={limit}
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
