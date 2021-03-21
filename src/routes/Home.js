import React from "react";
import axios from "axios";
import MovieReview from "./MovieReview";
import "./style.css";


class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <div>{ isLoading ? "Loading..."
    : 
		<div id="site-content">
      <header class="site-header">
				<div class="container">
					<a href="index.html" id="branding">
						<img src="images/logo.png" alt="" class="logo"/>
						<div class="logo-copy">
							<h1 class="site-title">Company Name</h1>
							<small class="site-description">Tagline goes here</small>
						</div>
					</a>

					<div class="main-navigation">
						<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						<ul class="menu">
							<li class="menu-item"><a href="index.html">Home</a></li>
							<li class="menu-item"><a href="about.html">About</a></li>
							<li class="menu-item current-menu-item"><a href="review.html">Movie reviews</a></li>
							<li class="menu-item"><a href="joinus.html">Join us</a></li>
							<li class="menu-item"><a href="contact.html">Contact</a></li>
						</ul>

						<form action="#" class="search-form">
							<input type="text" placeholder="Search..."/>
							<button><i class="fa fa-search"></i></button>
						</form>
					</div>

					<div class="mobile-navigation"></div>
				</div>
			</header>


			<main class="main-content">
				<div class="container">
					<div class="page">
						<div class="breadcrumbs">
							<a href="index.html">Home</a>
							<span>Movie Review</span>
						</div>

						<div class="filters">
							<select name="#" id="#" placeholder="Choose Category">
								<option value="#">Action</option>
								<option value="#">Drama</option>
								<option value="#">Fantasy</option>
								<option value="#">Horror</option>
								<option value="#">Adventure</option>
							</select>
							<select name="#" id="#">
								<option value="#">2012</option>
								<option value="#">2013</option>
								<option value="#">2014</option>
							</select>
						</div>
            
            <div className="movie-list"> {  
            movies.map(movie => (
              <MovieReview 
               key={movie.id}
               id={movie.id} 
               year={movie.year} 
               title={movie.title} 
               summary={movie.summary} 
               poster={movie.medium_cover_image} 
               genres={movie.genres}/>
               ))}
            </div>
					</div>
				</div>
			</main>

    </div>
    }
    </div>;
  }
}

export default Home;
