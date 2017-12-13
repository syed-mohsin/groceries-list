import queryString from 'query-string';

export const buildQuery = query => query ? `?${queryString.stringify(query)}` : '';
