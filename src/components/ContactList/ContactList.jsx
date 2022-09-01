import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, phone, id }) => (
        <li key={id} className={css.item}>
          <span className={css.text}>
            {name}: {phone}
          </span>

          <button onClick={() => deleteContact(id)} className={css.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
