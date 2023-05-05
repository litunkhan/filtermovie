import React from 'react';
import {motion} from 'framer-motion'

const Movies = (props) => {
    const {movies} = props

  
    return (
        <motion.div layout  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} 
        exit={{ opacity: 0 }} className='singleMovie'>
           
            <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}alt='Picture-logo'></img>
            <p>{movies.title}</p>
        </motion.div>
    );
  
};

export default Movies;