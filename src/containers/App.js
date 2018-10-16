import React, {PureComponent} from 'react';

import './App.css';
import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

    state = {
        persons: [
            {id: 1, name: 'Kolya', age: 35},
            {id: 2, name: 'Piper', age: 26},
            {id: 3, name: 'Deacon', age: 34}
        ],
        showPersons: false,
        showHidePersonsCounter: 0,
        authenticated: false
    };

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

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside componentDidUpdate()');
    }

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
        this.setState((prevState, props) => {
            return {
                showPersons: !prevState.showPersons,
                showHidePersonsCounter: prevState.showHidePersonsCounter + 1
            };
        });
    };

    loginHandler = () => {
        this.setState({authenticated: true});
    }

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
                <button
                    onClick={() => {
                        this.setState({showPersons: true});
                    }}
                >Show Persons
                </button>
                <Cockpit
                    appTitle={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    style={style}
                    showHidePersons={this.showHidePersonsHandler}
                    login={this.loginHandler}
                />
                <AuthContext.Provider
                    value={this.state.authenticated}
                >
                {persons}
                </AuthContext.Provider>
            </div>
        );
    }
}

export default App;
