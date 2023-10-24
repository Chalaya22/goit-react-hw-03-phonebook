import css from './ContactList.module.css';
import ContactElements from '../ContactElements/ContactElements';
const ContactList = ({ filtredContacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {filtredContacts.map(({ id, name, number }) => (
        <ContactElements
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
export default ContactList;
