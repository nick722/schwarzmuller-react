import React, {Component} from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'Kolya', age: 35},
            {id: 2, name: 'Piper', age: 26},
            {id: 3, name: 'Deacon', age: 34}
        ],
        showPersons: false
    };

    changeNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    showHidePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            border: '1px solid green',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => (
                        <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            change={(event) => this.changeNameHandler(event, person.id)}
                        />
                    ))}
                </div>
            );
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            };
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <StyleRoot>
                <div
                    className="App"
                >
                    <p
                        className={classes.join(' ')}
                    >This is really working!</p>
                    <button
                        style={style}
                        onClick={this.showHidePersonsHandler}
                    >Show/Hide Persons
                    </button>

                    {persons}

                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
