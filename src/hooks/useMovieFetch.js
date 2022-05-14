import { useState, useEffect, useCallback } from 'react'
//API
import API from '../API'
//helpers
import { isPersistedState } from '../helpers'
const initialState = {
  directors: [],
  actors: [],
}
export const useMovieFetch = (movieId) => {
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const fetchMovie = useCallback(async () => {
    try {
      setLoading(true)
      setError(false)
      const movie = await API.fetchMovie(movieId)
      const credits = await API.fetchCredits(movieId)
      //get directors only
      const directors = credits.crew.filter(
        (member) => member.job === 'Director'
      )
      setState({
        ...movie,
        actors: credits.cast,
        directors,
      })
      setLoading(false)
    } catch (error) {
      setError(true)
    }
  }, [movieId])
  useEffect(() => {
    const sessionState = isPersistedState(movieId)
    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }
    fetchMovie()
    return () => {}
  }, [movieId, fetchMovie])
  //write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state))

    return () => {}
  }, [movieId, state])

  return { state, loading, error }
}
