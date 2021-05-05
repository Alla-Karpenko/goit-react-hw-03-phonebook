import React from 'react';
import  { Component } from 'react';

import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filters';

import './App.scss';

class App extends Component {
    state = {
        contacts: [],
        filter: '',
    }
    
    handleSubmitForm = (contact) => {
        console.log(contact)
        this.setState(({contacts}) => ({
            contacts: [...contacts, contact],
        }));
    }
    
    changeFilter = filter => {
        this.setState({ filter });
    };

    visibleContacts = () => {
        const { contacts, filter } = this.state;

        return contacts.filter( contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };
    
    checkContact = ( name ) => {
        const { contacts } = this.state
        
        const checked = !!contacts.find(
        (contact) => contact.name === name);
  
        checked && alert(`${name} is already in contacts`)
        return !checked
      
    };

    handlerRemoveContact = id => 
        this.setState(({contacts}) => ({
        contacts: contacts.filter((contact) => contact.id !== id)
    }));
    
    componentDidMount(){
        const contacts = localStorage.getItem('contacts');
        const parsetContact = JSON.parse(contacts);
        if (parsetContact){
            this.setState({ contacts: parsetContact });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.contacts !== prevState.contacts) {
            localStorage.setItem( 'contacts', JSON.stringify(this.state.contacts));
        }
    }

    render() { 
        const { contacts, filter } = this.state;

        return (
            <div className='Phonebook'>
               <h1 className='Phonebook-title'>Phonebook</h1>
                <ContactForm    onSubmit={this.handleSubmitForm} check={this.checkContact} />
          
                <h2>Contacts</h2>
                {contacts.length > 1 && (
                    <Filter filter={filter} changeFilter={this.changeFilter} />
                )}

                {contacts.length > 0 && (
                    <ContactList
                        contacts={this.visibleContacts()}
                        onRemoveContact={this.handlerRemoveContact}
                    />
                )}
            </div>
        );
    }
}
 
export default App;
