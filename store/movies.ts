import { defineStore } from "pinia"

const token = 'a4d266c8'

export const useMoviesStore = defineStore({
  id: 'movies-store',
  state: () => {
    return {
      moviesList: [],
      totalResults: 0,
      movie: {}
    }
  },
  actions: {
    async fetchMovies(movieTitle: string, page: number) {
      try {
        const response = await fetch(`http://www.omdbapi.com/?s=${movieTitle}&page=${page}&apikey=${token}`)
        if (response.ok) {
          const data = await response.json()
          if(data.Response === 'True') {
            this.moviesList = data.Search
            this.totalResults = data.totalResults
          } else {
            this.moviesList = []
            this.totalResults = 0
            return data
          }
        }
      } catch (error) {
        console.log(error)
        console.error('Error fetching movie data', error)
      }
    },
    async fetchMovieByTitle(movieTitle: string) {
      console.log(movieTitle)
      try {
        const response = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${token}`)
        if (response.ok) {
          const data = await response.json()
          this.movie = data
        }
      } catch (error) {
        console.error('Error fetching movie data', error)
      }
    }
  },
  getters: {
    getMoviesList: state => state.moviesList,
    getTotalResults: state => state.totalResults,
    getMovieDetail: state => state.movie
  }
})