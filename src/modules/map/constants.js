export const requestStatus = {
  IDLE: 1,
  IN_PROGRESS: 2,
  SUCCESS: 3,
  FAILED: 4
}

export const API_KEY = 'z2vRz3X9b3h6GokPZ2uVyJGIStpe7iE3';

export const apiUrls = {
  TOMTOM_FUZZY_SEARCH: 'https://api.tomtom.com/search/2/poiSearch'
}

export const requiredApiParams = {
  typeahead: true,
  language: 'en-US',
  key: API_KEY
}