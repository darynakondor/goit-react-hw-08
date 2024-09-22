import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import  ContactForm  from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/Contacts/ContactList/ContactList'
import { fetchContacts } from '../../redux/contacts/operations';
import style from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="page">
      <div className='container'>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}
