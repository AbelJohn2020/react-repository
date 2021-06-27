import React from 'react';
import { getCharacter } from './components/utils';

function App() {
  const testApi = () => {
    setTimeout(() => {
      getCharacter();
    }, 1500);
  }

  testApi();
  return (
    <div className="App">
      <h1>My first app</h1>
    </div>
  );
}

export default App;
