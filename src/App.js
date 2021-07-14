import { useState, useEffect } from 'react';
import './App.css';
import { SearchBox } from './components/SearchBox';
import { getUrlPokemon } from './components/getUrlPokemon';
import RenderPokemon from './components/RenderPokemon';

function App() {

  const [queryTerm, setQueryTerm] = useState('')
  const [data, setData] = useState ("")
  const [infoPokemon, setInfoPokemon] = useState("")
  const [tenPokemons, setTenPokemons] = useState([])

  

  const handleSearch = (query) => {
    setQueryTerm(query)
  }

  
  //Haciendo la peticion API por medio de la funcion getUrlPokemon Trayendo la info de los pokemones segun su tipo
  useEffect(() => {
    if (queryTerm) {
      const func = async () => {
        const res = await getUrlPokemon(queryTerm)      
        setData(res)
      }
      func()
    }
  }, [queryTerm])
  

  //Agregando el Array de pokemones con su respenctiva url API
  useEffect(()=>{
    if(data){
      setInfoPokemon(data.pokemon)      
    }
  },[data])  

  
  //Cortando el Array de pokemones para tener Solo 10 
  useEffect(()=> {
    if(infoPokemon){           
      infoPokemon.splice(10,infoPokemon.length)      
      setTenPokemons(infoPokemon)
    }
    
  },[infoPokemon])
  

  const listPokemon = tenPokemons.map(e => <RenderPokemon key={e.pokemon.url} url={e.pokemon.url}/>)

  return (
    <div className="App">
      <header className="App-header">
        <SearchBox onSearch={handleSearch} />
        <div className="list-pokemon">
          {listPokemon}
        </div>       
      </header>
    </div>
  );
}

export default App;
