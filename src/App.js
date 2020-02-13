import React, { useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { Robots } from "./robots";

const App = () => {
  const [robots, setRobots] = useState(Robots);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = event => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter(robots => {
    return robots.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchfield={searchfield} searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
