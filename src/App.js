import { useState } from "react";
const tipos = {
  artifacts:"artefactos",
  boss:"jefes",
  characters:"personajes",
  consumables:"consumibles",
  domains:"dominios",
  elements:"elementos",
  enemies:"enemigos",
  materials:"materiales",
  nations:"naciones",
  weapons:"armas",
};

function App() {

  const [genshinState, setGenshinState] =useState ({
    types :[],
  });

  const fetchGenshinApi = async (url="https://api.genshin.dev/") => {
    const respuesta = await fetch(url);

    const respJson = await respuesta.json();
    if(item === "types"){
      setGenshinState({
        types:respJson.types,
      });
    }
    
setGenshinState({
types,
});
  };

  fetchGenshinApi();

  const handleChangeType =({target}) =>{
const url =
  };

  return (
    <div className="App container">
      <h1>GENSHIN IMPACT DEX</h1>
      <select name="types" onChange={handleChangeType}>
<option value= "">Seleccione una opcion</option>
{genshinState.types.map((type) => (

<option key={type} value={type}>
{tipos[type]}

</option>

  ))}
      </select>
 
    </div>
  );
}

export default App;
