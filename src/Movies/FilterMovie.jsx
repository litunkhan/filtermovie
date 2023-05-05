import React, { useEffect } from 'react';


const FilterMovie = ({movies,setfiltered,activejanre,setActivjenre}) => {
    console.log(movies)
    useEffect(()=>{
        if(activejanre===0){
            setfiltered(movies)
            return
          }
          else{
            const filter= movies.filter(n=>{
                console.log(n.genre_ids!==activejanre)
                console.log('movie',n.genre_ids)
                console.log('amnijanre',activejanre)
                return n.genre_ids.includes(activejanre)
            })
            setfiltered(filter)
          }
    },[activejanre])
    return (
        
    <div style={{display:'flex',gap:'14px',maxWidth:'1000px',margin:'auto',marginTop:'40px'}}>
      <button className={activejanre===0?'active':''} onClick={()=>setActivjenre(0)}>ALL</button>
      <button className={activejanre===12?'active':''}  onClick={()=>setActivjenre(12)}>Adventure</button>
      <button className={activejanre===28?'active':''}  onClick={()=>setActivjenre(28)}>Action</button>
      <button className={activejanre===80?'active':''}  onClick={()=>setActivjenre(80)}>Crime</button>
      <button className={activejanre===36?'active':''}  onClick={()=>setActivjenre(36)}>History</button>
      <button className={activejanre===16?'active':''}  onClick={()=>setActivjenre(16)}>Animation</button>
      </div>
      
    );
};

export default FilterMovie;
