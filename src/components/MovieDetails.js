import React from "react"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import "../App.css"
import BookTicket from "../Router/BookTicket"
//import UserInfo from "./UserInfo"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

function MyVerticallyCenteredModal(props) {
  const history = useHistory()
  const handleBookMovie = (movieID) => {
    console.log("Book movie id", movieID)
    history.push("/book-ticket")
  }
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p style={{ color: "black" }}>Movie Details</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.selectedMovie.map((movie) => {
            return (
              <div class="container" style={{ color: "black" }}>
                <div class="Image">
                  <img
                    src={movie.Poster}
                    alt="Poster"
                    style={{ height: "300px" }}
                  ></img>
                </div>
                <div class="movie-name">
                  <h4>Movie Name:</h4>
                  {movie.Title}
                </div>
                <div>
                  <h4>Movie Year:</h4>
                  {movie.Year}
                </div>
                <div>
                  <h4>IMDBID:</h4>
                  {movie.imdbID}
                </div>
                <div>
                  <h4>Movie type:</h4>
                  {movie.Type}
                </div>
                <div>
                  <Button
                    component={BookTicket}
                    to="/book-ticket"
                    variant="primary"
                    size="md"
                    onClick={() => handleBookMovie(movie.Title)}
                  >
                    Book now
                  </Button>
                </div>
              </div>
            )
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

function MovieDetails() {
  const [query, setquery] = useState([])
  const [modalShow, setModalShow] = useState(false)
  const [movieID, setMovieID] = useState(null)

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        "http://www.omdbapi.com/?s=black&y=2021&apikey=ef9f22cb"
      )

      const jsonResponse = await response.json()
      console.log("JSON Response", jsonResponse)
      setquery(jsonResponse.Search)
      // const moviesFetched=jsonResponse.Search.map((data))
      //setquery(jsonResponse);
    }
    getMovies()
  }, [])

  const handleClick = (title) => {
    setModalShow(true)
    setMovieID(title)
  }

  console.log("movie ID", movieID)
  const selectedMovie = query.filter((data) => data.Title === movieID)
  console.log("Select Movie", selectedMovie)
  return (
    <>
      <div className="heading">Upcoming Movies</div>
      {query.map((movie, index) => (
        <div key={index} className="col-md-2">
          <img src={movie.Poster} alt="movie" style={{ height: "50%" }}></img>
          <button
            className="btn btn-dark "
            style={{ width: "80%" }}
            onClick={() => handleClick(movie.Title)}
          >
            Movie Details
          </button>

          <MyVerticallyCenteredModal
            show={modalShow}
            selectedMovie={selectedMovie}
            onHide={() => setModalShow(false)}
          />
        </div>
      ))}
    </>
  )
}
export default MovieDetails
