import React, { Component } from 'react';

import Paper from 'material-ui/Paper';

import NavigationBar from './NavigationBar';
import SearchBox from './SearchBox';
import ContactList from './ContactList';

class Home extends Component {

    render () {
        return (
            <div className="flex-container">
                <Paper className="container" zDepth={2}>
                    <NavigationBar showActionButton={true} />
                    <SearchBox />
                    <ContactList />
                </Paper>
            </div>
        );
    }
    
};

export default Home;