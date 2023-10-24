import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  //add
  handleAddContact = contactList => {
    if (
      this.state.contacts.some(contact => contact.name === contactList.name)
    ) {
      alert(`'${contactList.name}' is already in contact`);
      return;
    }
    const newContact = {
      ...contactList,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  //delete
  onDeleteHandler = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  //filter
  onFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };
  onFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.onFilterContacts();

    return (
      <section>
        <h1 className="titlePhone">Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />

        <h2 className="titleContact">Contacts</h2>
        {this.state.contacts.length > 1 && (
          <Filter onFilter={this.onFilter} filter={filter} />
        )}

        {this.state.contacts.length !== 0 && (
          <ContactList
            filtredContacts={filteredContacts}
            onDelete={this.onDeleteHandler}
          />
        )}
      </section>
    );
  }
}
