import { Pagination as MuiPagination, PaginationItem } from '@mui/material';
import type { PaginationProps as MuiPaginationProps } from '@mui/material';

const defaultStyles: MuiPaginationProps['sx'] = {
  color: 'var(--bg-color)',
  fontSize: 16,
};

type PaginationProps = MuiPaginationProps;

function Pagination({ count, page, onChange }: PaginationProps) {
  return (
    <MuiPagination
      sx={defaultStyles}
      count={count}
      page={page}
      onChange={onChange}
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
