import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GithubPovider } from './context/GithubContext';
import Header from './components/layout/Header';

function App() {
  return (
    <GithubPovider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </div>
      </Router>
    </GithubPovider>
  );
}

export default App;
