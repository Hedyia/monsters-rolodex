import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/cardList.component";
import { Searcbar } from "./components/Searchbar/searchbar.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchQuery: ""
    };
  }
  async componentDidMount() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { searchQuery, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log(filteredMonsters);
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searcbar
          onChange={e => {
            this.setState({ searchQuery: e.target.value });
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
