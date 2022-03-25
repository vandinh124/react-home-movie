import { useState, useEffect } from 'react';
//API
import API from '../API';
//helpers
import { isPersistedState } from '../helpers';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};
export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //initial and search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('homestate');
      //if there is sessionState then set sessionState to state
      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    //if not set to initialState
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  //Load more
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  //sessionStorage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homestate', JSON.stringify(state));
  }, [searchTerm, state])
  return {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    isLoadingMore,
    setIsLoadingMore,
  };
};
