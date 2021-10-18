import MovieList from "./components/MovieList"
import { useState, useEffect } from "react"
import MovieListHeading from "./components/MovieListHeading"
import SearchBox from "./components/SearchBox"
import MovieDetails from "./components/MovieDetails"
function Home() {
  const [movies, setMovies] = useState([
    {
      Title: "Tangled",
      Year: "2010",
      imdbID: "tt0398286",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg",
    },
    {
      Title: "Luca",
      Year: "2021",
      imdbID: "tt12801262",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
    },
    {
      Title: "Raya and the Last Dragon",
      Year: "2021",
      imdbID: "tt5109280",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      Title: "Harry Potter and the Deathly Hallows: Part 2",
      Year: "2011",
      imdbID: "tt1201607",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Title: "Frozen II",
      Year: "2019",
      imdbID: "tt4520988",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
    },
    {
      Title: "Soul",
      Year: "2020",
      imdbID: "tt2948372",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_SX300.jpg",
    },
    {
      Title: "Luca tanzt leise",
      Year: "2016",
      imdbID: "tt5287914",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmNkOGRkMDYtNzdkMi00ZDM5LTlhZGUtZDk2M2YyYzYzODYyXkEyXkFqcGdeQXVyMjE4NDMzMDc@._V1_SX300.jpg",
    },
    {
      Title: "Luca",
      Year: "2021–",
      imdbID: "tt13752928",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTdhYTBhODgtZGJmOS00OWYxLTkzZTEtYWM2N2IzZjcwZGZhXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_SX300.jpg",
    },
    {
      Title: "Il commissario De Luca",
      Year: "2008",
      imdbID: "tt1210647",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2ZlOGM0MGItY2Y4MS00OThlLThiMWMtMGU3MzIyYmJhNTE3XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg",
    },
    {
      Title: "Pituca sin Luca$",
      Year: "2014–2015",
      imdbID: "tt4065592",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTQ1MjJhZjEtZmUxMi00ZTBmLTgwNWEtMjdmZWE5ZjRmZDc3XkEyXkFqcGdeQXVyMTcxNTYyMjM@._V1_SX300.jpg",
    },
  ])

  const [searchValue, setSearchValue] = useState("")

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ef9f22cb`

    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="E-Cube" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList movies={movies} />
        </div>
      </div>
      <div className="row">
        <MovieDetails />
      </div>
    </>
  )
}
export default Home
