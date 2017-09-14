import { observable } from 'mobx';

class Contact {
    @observable fName;
    @observable lName;
    @observable phone;
    @observable email;
    @observable id;

    constructor (contact) {
        this.fName = contact.fName;
        this.lName = contact.lName;
        this.phone = contact.phone;
        this.email = contact.email;
        this.id = contact.id;
    }

}

export default Contact;