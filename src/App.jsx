import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'
import { useEffect } from 'react';
import useDebouncedState from './hooks/useDebouncedState';

function App() {
  const [count, setCount] = useLocalStorage('count', 0);
  // const [nonDebouncedSearch, setNonDebouncedSearch] = useState('');
  const [search, setSearch] = useDebouncedState('', 3000);

  useEffect(() => {
    console.log('nonDebouncedSearch:', search);
  }, [search]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <input 
          type="text"
          onChange={(e) => setSearch(e.target.value)}

        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
