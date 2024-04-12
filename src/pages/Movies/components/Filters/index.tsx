import { Pagination } from '@/components/Pagination';
import { AgeSelect } from './Selectors/AgeSelect';
import { YearSelect } from './Selectors/YearSelect';
import { CountrySelect } from './Selectors/CountrySelect';
import { LimitSelect } from './Selectors/LimitSelect';
import { Search } from './Selectors/Search';
import type { SearchParams } from '@/types/search';
import type { PossibleCountriesResponse } from '@/types/fields';
import { filters_container, controls } from './filters.module.css';

type FiltersProps = {
  searchParams: URLSearchParams;
  updateSearchParams: (param: SearchParams, value: string) => void;
  countriesPossibleValues: PossibleCountriesResponse;
  totalPages: number;
};

function Filters({
  searchParams,
  updateSearchParams,
  countriesPossibleValues,
  totalPages,
}: FiltersProps) {
  return (
    <div className={controls}>
      <Search
        searchParams={searchParams}
        updateSearchParams={updateSearchParams}
      />
      <div className={filters_container}>
        <LimitSelect
          searchParams={searchParams}
          updateSearchParams={updateSearchParams}
        />
        <YearSelect
          searchParams={searchParams}
          updateSearchParams={updateSearchParams}
        />
        <AgeSelect
          searchParams={searchParams}
          updateSearchParams={updateSearchParams}
        />
        <CountrySelect
          searchParams={searchParams}
          updateSearchParams={updateSearchParams}
          countriesPossibleValues={countriesPossibleValues}
        />
      </div>
      <Pagination
        count={totalPages}
        searchParams={searchParams}
        updateSearchParams={updateSearchParams}
      />
    </div>
  );
}

export { Filters };
export type { FiltersProps };
