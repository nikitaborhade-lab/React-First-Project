import React from "react"

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container col-md-2 col-md-offset-1" key={index}>
          <img src={movie.Poster} alt="movie" style={{ height: "50%" }}></img>
          {/* <div className='d-flex align-items-center justify-content-center'>
                    </div> */}
        </div>
      ))}
    </>
  )
}
export default MovieList
