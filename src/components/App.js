import { Component } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './FormContacts/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedOurContacts = localStorage.getItem('contacts');
    if (savedOurContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedOurContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const isThisNameNotUnique = this.state.contacts.some(
      telName => telName.name.toUpperCase() === newContact.name.toUpperCase()
    );

    if (!isThisNameNotUnique) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: nanoid(5), ...newContact }],
      }));
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };

  changeContactsFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  deleteContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contactId => contactId.id !== contact
      ),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toUpperCase().includes(this.state.filter.toUpperCase())
    );

    return (
      <Layout>
        <ContactForm onAdd={this.addContact} />
        <Filter
          filter={this.state.filter}
          onFilter={this.changeContactsFilter}
        />
        <ContactsList
          allContacts={filteredContacts}
          onDelete={this.deleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
