import css from './Filter.module.css';
const Filter = ({ filter, onFilter }) => {
  return (
    <div className={css.filter}>
      <label htmlFor="filter">
        <p className={css.filterTitle}>Find contact by name</p>
        <input
          className={css.filterImput}
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={onFilter}
        />
      </label>
    </div>
  );
};
export default Filter;
