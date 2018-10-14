import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Kolya', age: 35},
            {name: 'Piper', age: 26},
            {name: 'Deacon', age: 34}
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 35},
                {name: 'Piper', age: 26},
                {name: 'Deacon', age: 34}
            ]
        });
    };

    changeNameHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 35},
                {name: 'Piper', age: 26},
                {name: 'Deacon', age: 34}
            ]
        });
    };

    showHidePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    render() {
        const style = {
            backgroundColor: 'lime',
            border: '1px solid green',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person) => (
                        <Person
                            name={person.name}
                            age={person.age}
                        />
                    ))}
                </div>
            );
        }

        return (
            <div>
                <button
                    style={style}
                    onClick={this.showHidePersonsHandler}
                >Show/Hide Persons
                </button>

                {persons}

            </div>
        );
    }
}

export default App;
