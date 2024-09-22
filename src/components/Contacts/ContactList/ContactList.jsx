import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import { selectFilteredContacts } from '../../../redux/contacts/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.list}>
      {filteredContacts.map((contact) => (
        <li className={style.item} key={contact.id}>
          <Contact
            contactId={contact.id}
            contactName={contact.name}
            contactNumber={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
