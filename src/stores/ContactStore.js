import { observable, action, computed } from 'mobx';
import Contact from '../models/Contact';
import store from 'store';

class ContactStore {

    @observable contacts = [];
    @observable filter = '';

    constructor () {
        if (store.get('contacts') !== undefined)
            this.contacts.replace(store.get('contacts'));
    }

    @computed get contactCount () {
        return this.contacts.length;
    }

    @computed get filteredContacts () {
        const matches = new RegExp(this.filter, 'i');
        return this.contacts.filter(c => !this.filter || matches.test(c.fName));
    }

    @action setFilter = filter => {
        this.filter = filter;
    }

    @action addContact = contact => {
        contact.id = this.contactCount + 1;
        this.contacts.push(new Contact(contact));
        store.set('contacts', this.contacts);
    }

    @action findById = id => {
        return this.contacts.filter(c => c.id === parseInt(id, 10))[0];
    }

    @action updateContact = contact => {
        this.contacts.filter(c => contact.id === c.id).map(c => {
            c.email = contact.email;
            c.fName = contact.fName;
            c.lName = contact.lName;
            c.phone = contact.phone

            return c;
        });

        store.set('contacts', this.contacts);
    }

    @action deleteContact = id => {
        this.contacts.replace(this.contacts.filter(c => c.id !== parseInt(id, 10)));

        store.set('contacts', this.contacts);
    }

}

const contactStore = new ContactStore();
export default contactStore;