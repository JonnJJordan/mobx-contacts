import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';

import { pink500 } from 'material-ui/styles/colors';

import NavigationBar from './NavigationBar';

@inject('store')
@observer
class ContactDetails extends Component {

    constructor(props) {
        super(props);

        this.store = this.props.store;
    }
    render() {

        const { findById } = this.store;

        const contact = findById(this.props.id);

        return (
            <div>
                <div className="flex-container">
                    <Paper className="container" zDepth={2}>
                        <NavigationBar title={`${contact.fName} ${contact.lName}`} showBackButton={true} showOptionButtons={true} />
                        <List>
                            <Subheader>Teléfono</Subheader>
                            <ListItem
                                leftIcon={<CommunicationCall color={pink500} />}
                                primaryText={contact.phone}
                            />
                            <Divider />
                            <Subheader>Correo</Subheader>
                            <ListItem
                                leftIcon={<CommunicationEmail color={pink500} />}
                                primaryText={contact.email}
                            />
                        </List>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default ContactDetails;