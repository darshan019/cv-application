import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <header className='head'>CV APP</header>
      <div className='cv-body'>
        <GeneralInfo />
        <div className='carrer-info'>
          <Education />
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
