import { useEffect, useState } from "react"

const RenderPokemon = ({url}) => {
    const [dataPokemon, setDataPokemon] = useState(null)

    //Se realiza la peticion API
    useEffect(()=>{
        if(url){
            let getPokemons = async () => {
                const response = await fetch(url).then(res => res.json())
                setDataPokemon(response)
            }
            getPokemons()            
        }
    },[url])  
    
    
    if(!dataPokemon){
        return null
    }    
    
    return(
        <div style={{border: '2px solid white', backgroundColor: "rgb(148 21 53)", color:"#EDEDED", flexBasis:"30%", marginTop:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>            
            <h4>{dataPokemon.name}</h4>
            <img src={dataPokemon.sprites.front_default} alt={dataPokemon.name} style={{marginBottom:"20px"}}/>                               
        </div>
    )
}

export default RenderPokemon