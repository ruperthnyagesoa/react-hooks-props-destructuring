import React from "react";
import MovieCard from "./MovieCard";
// import SocialMedia from "./SocialMedia";

// parent component
function App() {
  const title = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];


  return (
    <div className="App">
      <MovieCard title={title} genres={genresArr} /> {/*omit posterSrc */}
      {/* <MovieCard title={title} genres={genresArr} posterSrc={posterURL} /> */}

      {/* <SocialMedia links={socialLinks}/> */}
    </div>
  );
}

export default App;
