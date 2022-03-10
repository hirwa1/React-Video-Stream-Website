import React from 'react';

const MovieCard = ({movie}) => {
    return (
              <div className='movie'>

                   <div>
                   <p>{movie.year} </p>
                   </div>

                  <div>
                  <img  src={movie.Poster !== 'N/A' ? movie.Poster : 'https://kigalidevelopers.com/wp-content/uploads/2022/03/TRUSTED-KIGALI-DEVELOPERS.png'}  alt={movie.Title}/>
                  </div>

                  <div>
                      <span>{movie.Type}</span>
                      <h3>{movie.Title}</h3>
                  </div>
               </div>
    );
}

export default MovieCard;