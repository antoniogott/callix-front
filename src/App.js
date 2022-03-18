import { useState, useEffect } from "react";
import "./App.css";
import LaunchBig from "./components/LaunchBig/LaunchBig";
import Launch from "./components/Launch/Launch";
import axios from "axios";
import Home from "./components/Home/Home";

const LAUNCHES_API_URL_BASE = "http://localhost:3001/v1/launch";

function App() {
  const [latestLaunch, setLatestLaunch] = useState();
  const [nextLaunch, setNextLaunch] = useState();
  const [pastLaunches, setPastLaunches] = useState([]);
  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [launchId, setLaunchId] = useState("5eb87ce4ffd86e000604b337");
  const [launch, setLaunch] = useState();
  const [launches, setLaunches] = useState();
  const [selected, setSelected] = useState("latest");

  useEffect(() => {
    fetchLaunches();
  }, []);

  useEffect(() => {
    axios
      .get(`${LAUNCHES_API_URL_BASE}/${launchId}`)
      .then((res) => {
        setLaunch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [launchId]);

  useEffect(() => {
    switch (selected) {
      case "past":
        setLaunches(pastLaunches);
        break;
      case "upcoming":
        setLaunches(upcomingLaunches);
        break;
      case "next":
        setLaunch(nextLaunch);
        break;
      case "latest":
      default:
        setLaunch(latestLaunch);
        break;
    }
  }, [selected]);


  const fetchLaunches = () => {
    axios
      .get(`${LAUNCHES_API_URL_BASE}/next`)
      .then((res) => {
        setNextLaunch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${LAUNCHES_API_URL_BASE}/latest`)
      .then((res) => {
        setLatestLaunch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${LAUNCHES_API_URL_BASE}/past`)
      .then((res) => {
        setPastLaunches(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${LAUNCHES_API_URL_BASE}/upcoming`)
      .then((res) => {
        setUpcomingLaunches(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function selectionChanged(option) {
    setSelected(option);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Home selected={selected} launch={launch} launches={launches} onSelected={selectionChanged} />
      </header>
    </div>
  );
}

export default App;
