import React from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?apikey=b3063901';


const movie1 = {
   "Poster": "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg",
"Title": "Reign of Judges: Title of Liberty - Concept Short",
"Type": "movie",
"Year": "2018",
"imdbID": "tt4275958"
}
const App = () =>{
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s={title}`);
        const data = await response.json();
        console.log(data.Search);
    }
    useEffect(() => {
       searchMovies('Spiderman');
    }, []);
    return (
        <div className='app'>
       <h1> Movie Land</h1>
          

          <div className="search">
            <input 
             placeholder='Search For Movies'
             value="Superman"
             onChange={() => {}}
            />
            <img 
            src={SearchIcon}
            alt="search"
            onClick={() => {}}
            />
          </div>

          <div className='container'>
               <div className='movie'>
                   <div>
                   <p>{movie1.year} </p>
                   </div>
                  <div>

                  
                  <img  src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://kigalidevelopers.com/wp-content/uploads/2022/03/TRUSTED-KIGALI-DEVELOPERS.png'}  alt={movie1.Title}/>
                  </div>
               </div>
          </div>
        </div>
    );
}

export default App;