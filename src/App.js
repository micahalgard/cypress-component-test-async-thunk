import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { requestFetchPoke } from './redux/poke/actions';
import { selectPokemon } from './redux/poke/selectors';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestFetchPoke());
  }, [dispatch]);

  const pokemon = useSelector(selectPokemon);
  return (
    <div className="App">
        <div className="title">
          <h1>Cypress test example app</h1>
        </div>
        <div className="table">
          <h2 style={{ textAlign: "center"}}>Pokemon API</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>url</th>
            </tr>

          {pokemon.length > 0 && 
            <>
              {pokemon.map((poke, index) => (
                <tr key={index} data-testId={poke.name}>
                  <td >
                    {poke.name}
                  </td>
                  <td>
                    {poke.url}
                  </td>
                </tr>
              ))}
            </>
          }
          </table>
        </div>
    </div>
  );
}

export default App;
