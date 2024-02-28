import classes from './style.module.css'

function Movie({ movie }) {
  return (
    <>
      <div className={classes.card}>
        <img src={movie.poster} alt="imágen de la película" />
        <h2>{movie.title}</h2>
      </div>
    </>
  )
}

export default Movie
