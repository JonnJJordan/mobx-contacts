import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import ContactForm from './ContactForm';
import ReactiveForm from '../models/ReactiveForm'
import NavigationBar from './NavigationBar';

class AddContact extends Component {
    render() {
        return (
            <div className="flex-container">
                <Paper className="container" zDepth={2}>
                    <NavigationBar showBackButton={true} />
                    <ContactForm form={ReactiveForm} />
                </Paper>
            </div>
        );
    }
}

export default AddContact;