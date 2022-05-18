import { GithubPovider } from './context/GithubContext';
import Search from './components/layout/Search';

function App() {
  return (
    <GithubPovider>
      <div className="app">
        <h1>Elehub</h1>
        <Search />
      </div>
    </GithubPovider>
  );
}

export default App;
