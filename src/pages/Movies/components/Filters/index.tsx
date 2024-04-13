import { Pagination } from '@/components/Pagination';
import { AgeSelect } from './Selectors/AgeSelect';
import { YearSelect } from './Selectors/YearSelect';
import { CountrySelect } from './Selectors/CountrySelect';
import { LimitSelect } from './Selectors/LimitSelect';
import { Search } from './Selectors/Search';
import type { PossibleCountriesResponse } from '@/types/fields';
import styles from './styles.module.css';

type FiltersProps = {
  countriesPossibleValues: PossibleCountriesResponse;
  totalPages: number;
};

function Filters({ countriesPossibleValues, totalPages }: FiltersProps) {
  return (
    <div className={styles.controls}>
      <Search />
      <div className={styles.filters_container}>
        <LimitSelect />
        <YearSelect />
        <AgeSelect />
        <CountrySelect countriesPossibleValues={countriesPossibleValues} />
      </div>
      <Pagination count={totalPages} />
    </div>
  );
}

export { Filters };
export type { FiltersProps };
