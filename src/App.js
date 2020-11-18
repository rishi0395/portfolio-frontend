import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './pages/about/about';
import Home from './pages/home';
import ProjectsPage from './pages/projects/project';
import Contact from './pages/contact';
import Feedback from './pages/feedback';

function App() {
  return (
    <Router>
      <Switch>
        <Home path='/' exact />
        <About path='/about' exact />
        <ProjectsPage path='/projects' exact />
        <Contact path='/contact' exact />
        <Feedback path='/givefeedback' exact />
      </Switch>
    </Router>
  );
}

export default App;
