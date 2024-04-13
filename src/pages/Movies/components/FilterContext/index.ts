import { createContext, useContext } from 'react';
import type { SearchParams } from '@/types/search';
import type { FiltersProps } from '../Filters';

type FilterContextProps = {
  searchParams: URLSearchParams;
  updateSearchParams: (param: SearchParams, value: string) => void;
};

const FilterContext = createContext<FilterContextProps>({
  searchParams: new URLSearchParams(),
  updateSearchParams: () => {},
} as FilterContextProps);

const useFilters = () => {
  return useContext(FilterContext);
};

const FilterContextProvider = FilterContext.Provider;

export { FilterContext, useFilters, FilterContextProvider };
export type { FilterContextProps };
