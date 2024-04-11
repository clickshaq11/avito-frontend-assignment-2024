import { MenuItem, Select } from '@mui/material';
import { FiltersProps } from '../..';
import { label, limit, label_container } from '../../filters.module.css';
import { generateYearSelect } from '../../../../../../utils/generateYearSelect';
import { useId } from 'react';
import { Input } from '../../../../../../components/Input';
import { Switch } from '../../../../../../components/Switch';

type YearSelectProps = Pick<
  FiltersProps,
  'searchParams' | 'updateSearchParams'
>;

function YearSelect({ searchParams, updateSearchParams }: YearSelectProps) {
  const id = useId();
  return (
    <div className={label_container}>
      <label htmlFor={id} className={label}>
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
        className={limit}
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
