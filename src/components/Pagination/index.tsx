import { useContext } from 'react';
import { Pagination as MuiPagination, PaginationItem } from '@mui/material';
import type { PaginationProps as MuiPaginationProps } from '@mui/material';
import { useFilters } from '@/pages/Movies/components/FilterContext';

const defaultStyles: MuiPaginationProps['sx'] = {
  color: 'var(--bg-color)',
  fontSize: 16,
};

function Pagination({ count }: MuiPaginationProps) {
  const { searchParams, updateSearchParams } = useFilters();

  return (
    <MuiPagination
      sx={defaultStyles}
      count={count}
      page={parseInt(searchParams.get('page'), 10) || 1}
      onChange={(_, value) => updateSearchParams('page', `${value}`)}
      renderItem={({ selected, ...other }) => (
        <PaginationItem
          {...other}
          selected={selected}
          sx={{
            ...defaultStyles,
            backgroundColor: selected
              ? 'hsl(from var(--bg-color) h s l / 50%)'
              : 'transparent',
          }}
        />
      )}
    />
  );
}

export { Pagination };
