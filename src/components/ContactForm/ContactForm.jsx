import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from 'components/ContactForm/ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'phone':
        setPhone(value);
        return;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, phone);
    resetForm();
  };
  const inputNameId = nanoid();
  const inputPhoneId = nanoid();

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={inputNameId}>
        <p className={css.input__title}>Name</p>
        <input
          className={css.input}
          id={inputNameId}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="inputNumberId">
        <p className={css.input__title}>Number</p>
        <input
          className={css.input}
          id={inputPhoneId}
          value={phone}
          onChange={handleChange}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
