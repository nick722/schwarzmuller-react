import React, {Component} from 'react';

import './App.css';
import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

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
        console.log('[App.js] Inside render()');

        const style = {
            backgroundColor: 'green',
            color: 'white',
            border: '1px solid green',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                    <Persons
                        persons={this.state.persons}
                        deletePerson={this.deletePersonHandler}
                        changeName={this.changeNameHandler}
                    />
            );
            style.backgroundColor = 'red';
        }

        return (
            <div
                className="App"
            >
                <Cockpit

                    appTitle={this.props.title}

                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    style={style}
                    showHidePersons={this.showHidePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
