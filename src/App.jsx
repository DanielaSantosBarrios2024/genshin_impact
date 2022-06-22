import { useEffect } from "react";
import { useState } from "react";

const tipos = {
  artifacts: "Artefactos",
  boss: "Jefes",
  characters:"Personajes",
  consumables: "Consumibles",
  domains:"Dominios",
  elements:"Elementos",
  enemies: "Enemigos",
  materials:"Materiales",
  nations:"Naciones",
  weapons:"Armas",
};

function App() {
  const [genshinState, setGenshinState] = useState({
    types: []
  });

  const fetchGenshinApi = async (item, url = "https://api.genshin.dev/") => {
    const respuesta = await fetch(url);
    const respJSON = await respuesta.json();

    if (item==="types"){
      setGenshinState({
        ...genshinState,
        types:respJSON.types,
      });   
   /*   genshinState = {{types:[...]} artifacts :[.....]}  */
    }else{
      setGenshinState({types:[...genshinState.types],[item]:respJSON});
    }
console.log(respJSON);
  
  };

  useEffect(() => {
fetchGenshinApi("types");
  }, []);


  const handleChangeType = ({ target }) => {
    const url = `https://api.genshin.dev/${target.value}`;
    fetchGenshinApi(target.value, url);
    console.log(genshinState);
  };

  return (
    <div className="App container">
      <h1>Genshin Impact Dex</h1>
      <hr />
      <select name="types" onChange={handleChangeType} >
        <option value=""> Seleccione un elemento</option>
        {genshinState.types.map((type) => ( 
          <option key={type} value={type} >
            {tipos[type]}
            </option>
        )
        )}
        

      </select>
      {genshinState.artifacts &&(
        <select name="artifacts">
          <option value="">Seleccione una opcion</option>
          {genshinState.artifacts.map((artifact)=> (
            <option key ={artifact} value={artifact}>
              {artifact}
            </option>
          ))}
        </select>
      )}
    
      {genshinState.boss &&(
        <select name="boss">
          <option value="">Seleccione una opcion</option>
          {genshinState.boss.map((boss)=> (
            <option key ={boss} value={boss}>
              {boss}
            </option>
          ))}
        </select>
      )}

    </div>
  );
}

export default App;
