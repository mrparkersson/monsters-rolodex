import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';

import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex App</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder="search monsters"
        searchField={searchField}
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(this.state.searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex App</h1>
//         <SearchBox
//           onSearchChange={this.onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;
