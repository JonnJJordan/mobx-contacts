import { Form } from 'mobx-react-form';
import validatorjs from 'validatorjs';
import bindings from '../setup/bindings';

class ReactiveForm extends Form {

    bindings () {
        return bindings;
    }

    plugins () {
        return { dvr: validatorjs }
    }

    setup () {
        return {
            fields: [{
                name: 'fName',
                label: 'Nombre',
                placeholder: 'Ingrese el nombre...',
                rules: 'required|string'
            }, {
                name: 'lName',
                label: 'Apellido',
                placeholder: 'Ingrese el apellido...',
                rules: 'required|string'
            }, {
                name: 'phone',
                label: 'Teléfono',
                placeholder: 'Ingrese el telefono...',
                rules: 'required|string'
            }, {
                name: 'email',
                label: 'Email',
                placeholder: 'Insert Email...',
                rules: 'required|email|string|between:5,25'
            }]
        }
    }

    hooks () {
        return {

            onInit () {
                this.each(field => field.set('bindings', 'ContactTextField'));
            }
            
        };
    }

}

const form = new ReactiveForm();
export default form;