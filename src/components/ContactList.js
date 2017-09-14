import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import {List, ListItem} from 'material-ui/List';
import ContactListItem from './ContactListItem';

@inject('store')
@observer
class ContactList extends Component {
    render() {

        const { filteredContacts, contacts } = this.props.store;

        return (
            <List className="contact-list">
                {
                    filteredContacts.length > 0 ?
                        filteredContacts.sort((a, b) => ( a.fName < b.fName ? -1 : (a.fName > b.fName) ? 1 : 0 )).map((c, i) => (
                            (i === 0 || !filteredContacts[i - 1].fName.startsWith(c.fName.charAt(0))) ?
                                <ContactListItem firstItem={true} contact={c} key={c.id} />
                            :   
                                <ContactListItem contact={c} key={c.id} />
                        ))
                    : (contacts.length > 0) ?
                        <ListItem 
                            primaryText="No se encontraron contactos..."
                        />
                    :
                        ''
                }
            </List>
        );
    }
}

export default ContactList;