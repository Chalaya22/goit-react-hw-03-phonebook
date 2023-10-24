import React, { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: ' ',
    number: ' ',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    // this.setState({[event.currentTarget.name]: event.currentTarget.value})
  };
  reset = () => {
    this.setState({ name: ' ', number: ' ' });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddContact(this.state);
    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label>
          <p className={css.labelText}>Name</p>
          <input
            className={css.imputForm}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="username: "
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label>
          <p className={css.labelText}>Number</p>
          <input
            className={css.imputForm}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            placeholder="Enter number tel: "
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            required
          />
        </label>

        <button className={css.buttonForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
