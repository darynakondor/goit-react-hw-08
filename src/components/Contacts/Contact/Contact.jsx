import { useDispatch } from 'react-redux';
import style from './Contact.module.css';
import { deleteContact } from '../../../redux/contacts/operations'; 

const Contact = ({ contactId, contactName, contactNumber }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contactId)); 
  };

  return (
    <div className={style.contact}>
      <p className={style.name}>{contactName}</p>
      <p className={style.number}>{contactNumber}</p>
      <button
        className={style.deleteBtn}
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
