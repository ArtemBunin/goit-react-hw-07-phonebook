
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Box } from './App.styled';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchContacts } from '../redux/options';

import { getIsLoading,getError } from 'redux/selectors';
import { Loader } from './Loader/Loader';
export const MyCompononet = () => {
  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loading= useSelector(getIsLoading)
  const error= useSelector(getError)
  return (
    <Box>
       
      <h2>PhoneBook</h2>
      <ContactForm />
      {loading&&!error && <Loader />}
      <h2>Contactlist</h2>
      <Filter />

      <ContactList></ContactList>
   
    </Box>
  );
};
