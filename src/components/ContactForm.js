import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import ContactTextField from './ContactTextField';
import RaisedButton from 'material-ui/RaisedButton';
import swal from 'sweetalert2';

@inject('store')
@observer
class ContactForm extends Component {

    constructor (props) {
        super(props);

        this.form = this.props.form;
        this.store = this.props.store;
        this.history = this.props.history;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.form.validate({ showErrors: true })
            .then(( { isValid } ) => {
                if (isValid) {
                    if (this.props.updatedFields !== null) {
                        this.store.updateContact({...this.form.values(), id: this.props.updatedFields.id});
                        swal({
                            title: 'Exito!',
                            text: 'Tu contacto ha sido modificado.',
                            type: 'success',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            showConfirmButton: false,
                            timer: 2000
                        }).then(() => {}, dismiss => {
                                if (dismiss === 'timer') {
                                    this.form.clear();
                                    this.history.push(`/contact/${this.props.updatedFields.id}`);
                                }
                        });
                        
                    } else {
                        this.store.addContact(this.form.values());
                        swal({
                            title: 'Exito!',
                            text: 'Tu contacto ha sido creado.',
                            type: 'success',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            showConfirmButton: false,
                            timer: 2000
                        }).then(() => {}, dismiss => {
                                if (dismiss === 'timer') {
                                    this.form.clear();
                                    this.history.push('/');
                                }
                        });
                    }   
                }
            });
    }

    componentDidMount () {
        if (this.props.updatedFields !== null) {
            this.form.update(this.props.updatedFields);
        }
    }

    render () {

        this.form.clear();

        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <ContactTextField field={this.form.$('fName')} />
                    <ContactTextField field={this.form.$('lName')} />
                    <ContactTextField field={this.form.$('phone')} />
                    <ContactTextField field={this.form.$('email')} />
                    <RaisedButton type="submit" label="Guardar" secondary={true} style={{marginTop: '1rem'}}  />
                </form>
            </div>
        );
    }
}

ContactForm.defaultProps = {
    updatedFields: null
};

export default withRouter(ContactForm);

