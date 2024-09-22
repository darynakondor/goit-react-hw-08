import { useSelector, useDispatch } from 'react-redux';
import style from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const filterName = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearchContact = (ev) => {
    dispatch(changeFilter(ev.target.value));
  };

  return (
    <div className={style.searchArea}>
      <p className={style.text}>Find contacts by name</p>
      <input
        type="text"
        className={style.inp}
        value={filterName}
        onChange={handleSearchContact}
      />
    </div>
  );
};

export default SearchBox;
