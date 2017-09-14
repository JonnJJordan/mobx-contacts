import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Paper from 'material-ui/Paper';

import NavigationBar from './NavigationBar';
import ReactiveForm from '../models/ReactiveForm'
import ContactForm from './ContactForm';

@inject('store')
@observer
class UpdateContact extends Component {

    constructor (props) {
        super(props);

        this.store = this.props.store;

        console.log(this.props.id);
    }

    render() {

        const { findById } = this.store;
        
        const contact = findById(this.props.id);

        return (
            <div>
                <div className="flex-container">
                    <Paper className="container" zDepth={2}>
                        <NavigationBar showBackButton={true} backUrl={`/contact/${this.props.id}`} />
                        <ContactForm form={ReactiveForm} updatedFields={contact} />
                    </Paper>
                </div>
            </div>
        );
    }
}

export default UpdateContact;