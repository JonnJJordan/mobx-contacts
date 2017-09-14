import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ListItem } from 'material-ui/List';

import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import { darkBlack, pinkA200, transparent } from 'material-ui/styles/colors';

class ContactListItem extends Component {

    render() {

        const c = this.props.contact;

        if (this.props.firstItem) {
            return (
                <div>
                    <Divider inset={true} />
                    <Link to={`/contact/${c.id}`} style={{textDecoration: 'none'}} >
                        <ListItem
                            primaryText={`${c.fName} ${c.lName}`}
                            secondaryText={
                                <p>
                                    <span style={{color: darkBlack}}>{c.phone}</span> <br/>
                                    {c.email}
                                </p>
                            }
                            insetChildren={true}
                            secondaryTextLines={2}
                            leftAvatar={
                                <Avatar
                                    color={pinkA200} 
                                    backgroundColor={transparent} 
                                    style={{left: 8}}
                                >
                                    {c.fName.charAt(0)}
                                </Avatar>
                            }
                        />
                    </Link>
                </div>
            );
        } else {
            return (
                <Link to={`/contact/${c.id}`} style={{textDecoration: 'none'}} > 
                    <ListItem
                        primaryText={`${c.fName} ${c.lName}`}
                        secondaryText={
                            <p>
                                <span style={{color: darkBlack}}>{c.phone}</span> <br/>
                                {c.email}
                            </p>
                        }
                        insetChildren={true}
                        secondaryTextLines={2}
                    />
                </Link>
            );
        }
    }
}

ContactListItem.defaultProps = {
    contact: null,
    firstItem: false
};

export default ContactListItem;