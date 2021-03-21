import React from 'react';
import PropTypes from "prop-types";
import "./style.css";

function MovieReview({ year, title, summary, poster, genres }) {
    return (
    <div className="movie">
        <figure className="movie-poster"><img src={poster} alt="#"/></figure>
		<div className="movie-title"><a href="single.html">{title}</a></div>
        <h5 className="movie__year">{year}</h5>
        <h5 className="movie__year">{genres.join(",")}</h5>
        <p>{summary}</p>
    </div>
    );
}

MovieReview.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieReview;