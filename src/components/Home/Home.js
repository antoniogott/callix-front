import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import HeaderNav from "../HeaderNav/HeaderNav";
import Launch from "../Launch/Launch";
import "./Home.css";
import LaunchList from "../LaunchList/LaunchList";

const LAUNCHES_API_URL_BASE = "http://localhost:3001/v1/launch";

export default function Home(props) {
  const [latestLaunch, setLatestLaunch] = useState();
  const [nextLaunch, setNextLaunch] = useState();
  const [pastLaunches, setPastLaunches] = useState([]);
  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [launchId, setLaunchId] = useState();
  const [launch, setLaunch] = useState();
  const [launches, setLaunches] = useState();
  const [tab, setTab] = useState("latest");

  let content;

  useEffect(() => {
    fetchLaunches();
  }, []);

  useEffect(() => {
    // window.scrollTo(0, 0);
  });

  useEffect(() => {
    axios
      .get(`${LAUNCHES_API_URL_BASE}/${launchId}`)
      .then((res) => {
        setLaunch(res.data);
        setTab("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [launchId]);

  useEffect(() => {
    switch (tab) {
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
        setLaunch(latestLaunch);
        break;
      default:
        break;
    }
    window.scrollTo(0, 0);
  }, [tab, pastLaunches, upcomingLaunches, nextLaunch, latestLaunch]);


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

  let showSuccess = false;
  switch (tab) {
    case "past":
      showSuccess = true;
    // falls through
    case "upcoming":
      content = <LaunchList launches={launches} showSuccess={showSuccess} onSelected={setLaunchId} />;
      break;
    case "next":
    case "latest":
    default:
      content = <Launch launch={launch} />;
      break;
  }

  return (
    <div className="home_root">
      <HeaderNav selected={tab} onSelected={setTab} />
      {content}
    </div>
  );
}
