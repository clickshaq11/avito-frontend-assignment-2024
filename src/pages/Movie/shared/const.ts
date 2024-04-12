import { ClientPaginationParams } from '../../../types/pagination';

const DEFAULT_PAGINATION_STATE: ClientPaginationParams = {
  page: 1,
  totalPages: 1,
};

const DEFAULT_PAGINATION_LIMIT = 10;

export { DEFAULT_PAGINATION_LIMIT, DEFAULT_PAGINATION_STATE };
