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
 {genshinState.characters &&(
        <select name="characters">
          <option value="">Seleccione una opcion</option>
          {genshinState.characters.map((character)=> (
            <option key ={character} value={character}>
              {character}
            </option>
          ))}
        </select>
      )}
     {genshinState.consumables &&(
        <select name="consumables">
          <option value="">Seleccione una opcion</option>
          {genshinState.consumables.map((consumable)=> (
            <option key ={consumable} value={consumable}>
              {consumable}
            </option>
          ))}
        </select>
      )}
     {genshinState.domains &&(
        <select name="domains">
          <option value="">Seleccione una opcion</option>
          {genshinState.domains.map((domain)=> (
            <option key ={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      )}
       {genshinState.elements &&(
        <select name="elements">
          <option value="">Seleccione una opcion</option>
          {genshinState.elements.map((element)=> (
            <option key ={element} value={element}>
              {element}
            </option>
          ))}
        </select>
      )}
       {genshinState.enemies &&(
        <select name="enemies">
          <option value="">Seleccione una opcion</option>
          {genshinState.enemies.map((enemie)=> (
            <option key ={enemie} value={enemie}>
              {enemie}
            </option>
          ))}
        </select>
      )}
       {genshinState.materials &&(
        <select name="materials">
          <option value="">Seleccione una opcion</option>
          {genshinState.materials.map((material)=> (
            <option key ={material} value={material}>
              {material}
            </option>
          ))}
        </select>
      )}
         {genshinState.nations &&(
        <select name="nations">
          <option value="">Seleccione una opcion</option>
          {genshinState.nations.map((nation)=> (
            <option key ={nation} value={nation}>
              {nation}
            </option>
          ))}
        </select>
         )}
            {genshinState.weapons &&(
              <select name="weapons">
                <option value="">Seleccione una opcion</option>
                {genshinState.weapons.map((weapon)=> (
                  <option key ={weapon} value={weapon}>
                    {weapon}
                  </option>
                ))}
              </select>
            )}
    </div>
  );
}

export default App;
