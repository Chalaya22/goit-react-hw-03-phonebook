import css from './ContactElements.module.css';
const ContactElements = ({ id, name, number, onDelete }) => {
  return (
    <li key={id} className={css.contactElements}>
      <span className={css.itemName}> {name}:</span>
      <span className={css.itemNumber}> {number}</span>
      <button
        className={css.itemButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delay
      </button>
    </li>
  );
};
export default ContactElements;
