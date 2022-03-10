import React from 'react';

const MovieCard = ({movie1}) => {
    return (
              <div className='movie'>

                   <div>
                   <p>{movie1.year} </p>
                   </div>

                  <div>
                  <img  src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://kigalidevelopers.com/wp-content/uploads/2022/03/TRUSTED-KIGALI-DEVELOPERS.png'}  alt={movie1.Title}/>
                  </div>

                  <div>
                      <span>{movie1.Type}</span>
                      <h3>{movie1.Title}</h3>
                  </div>
               </div>
    );
}

export default MovieCard;