import { useState, useEffect } from 'react';
import './App.css';
import LaunchBig from './components/LaunchBig';
import Launch from './components/Launch';
import axios from 'axios';

function App() {
  const [latestLaunch, setLatestLaunch] = useState();
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = () => {
    axios
      .get('http://localhost:3001/past')
      .then((res) => {
        setLaunches(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get('http://localhost:3001/latest')
      .then((res) => {
        setLatestLaunch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <LaunchBig launch={latestLaunch} /> */}
        <LaunchBig launch={launches.find(x => x.imgs.gallery.length > 1)} />
        {/* <Launch launch={latestLaunch}/> */}
        {/* {JSON.stringify(launches)} */}
      </header>
    </div>
  );
}

export default App;
