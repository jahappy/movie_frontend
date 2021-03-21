import React from "react";
import axios from "axios";
import MovieReview from "./MovieReview";
import "./style.css";

// function App() {
//   return (
//     <div class="main-navigation">
//       <h1>Hello</h1>
//       <SiteHeader/>
//     </div>
//   );
// }

class App extends React.Component {
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
    return <div>{isLoading ? "Loading..."
    : 
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
    }
    </div>;
  }
}

export default App;
