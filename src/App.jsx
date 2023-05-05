
import { useEffect, useState } from 'react';
import Movies from './Movies/Movies';
import FilterMovie from './Movies/FilterMovie';
import {motion} from 'framer-motion'
import { AnimatePresence } from "framer-motion";

const App =()=> {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [filter,setfilter] = useState([])
  const [janre,setjanre] = useState(0)
 
 
  const fetchMovies = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US');
    const data = await res.json();
    setIsLoading(false);
    if (data) {
      setMovies(data.results);
      // setfilter(data.results)

    } else {
      setMovies([]);
    }
  };
  useEffect(() => {
    fetchMovies();
    
  }, []);
  useEffect(()=>{
    setfilter(movies)
  },[movies])
  
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Welcome_IMDB_MOVIE</h2>
      
     
      <FilterMovie movies={movies} setfiltered={setfilter} activejanre={janre} setActivjenre={setjanre}></FilterMovie>
      <motion.div  layout className="movies">
      <AnimatePresence>
        {filter.map(movie => (
          <Movies key={movie.id} movies={movie} />
        ))}
        {isLoading && <h2 style={{textAlign:'center',marginTop:'40vh',marginLeft:'33vw'}}>Loading...</h2>}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App