import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter, Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { white } from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import swal from 'sweetalert2'

@inject('store')
@observer
class NavigationBar extends Component {

    constructor (props) {
        super(props);

        this.history = this.props.history;
        this.store = this.props.store;

    }

    back () {
        this.history.push(this.props.backUrl);
    }

    delete (id) {
        swal({
            title: '¿Estas seguro?',
            text: "¡No podrás revertir este cambio!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00bcd4',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            cancelButtonColor: '#F44336',
            confirmButtonText: 'Si, ¡eliminalo!',
            cancelButtonText: 'Cancelar'
          }).then(() => {
            swal({
                title: '¡Eliminado!',
                text: 'Tu contacto ha sido eliminado.',
                type: 'success',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: false,
                timer: 2000
            }).then(() => {}, dismiss => {
                    if (dismiss === 'timer') {
                        this.store.deleteContact(id);
                        this.history.push('/');
                    }
            })
          }, dismiss => {});
    }

    render () {

        const backButton = (
            <IconButton onClick={this.back.bind(this)}>
                <NavigationBack />
            </IconButton>
        );

        const buttons = (
            <div>
                <Link to={`/update/contact/${this.props.match.params.id}`}>
                    <IconButton>
                        <ContentCreate color={white} />
                    </IconButton>
                </Link>
                <IconButton onClick={this.delete.bind(this, this.props.match.params.id)}>
                    <ActionDelete color={white} />
                </IconButton>
            </div>
        );

        return (
            <div>
                <AppBar
                    title={this.props.title}
                    className="container-bar"
                    showMenuIconButton={this.props.showBackButton}
                    iconElementLeft={backButton}
                    iconElementRight={this.props.showOptionButtons ? buttons : (<br />)}
                />
                {this.props.showActionButton ?
                    <div>
                        <Link to="/add/contact">
                            <FloatingActionButton secondary={true} className="add-btn">
                                <ContentAdd />
                            </FloatingActionButton>
                        </Link>
                    </div>
                : ''
                }
            </div>
        );
        
    }
};

NavigationBar.defaultProps = {
    showBackButton: false,
    showOptionButtons: false,
    showActionButton: false,
    title: 'Agenda de Contactos',
    backUrl: '/'
}

export default withRouter(NavigationBar);