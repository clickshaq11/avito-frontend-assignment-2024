import { Pagination as MuiPagination, PaginationItem } from '@mui/material';
import { ComponentProps } from 'react';
import { FiltersProps } from '@/pages/Movies/components/Filters';

type PaginationProps = ComponentProps<typeof MuiPagination> &
  Pick<FiltersProps, 'searchParams' | 'updateSearchParams'>;

const defaultStyles: ComponentProps<typeof MuiPagination>['sx'] = {
  color: 'var(--bg-color)',
  fontSize: 16,
};

function Pagination({
  count,
  searchParams,
  updateSearchParams,
}: PaginationProps) {
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
