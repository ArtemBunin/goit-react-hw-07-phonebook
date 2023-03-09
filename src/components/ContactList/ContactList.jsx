
import { Item, Btn, NumberText } from './ContactList.styled';
import { useSelector,useDispatch } from 'react-redux';
import { getFilterContacts } from 'redux/selectors';
import { deleteContact } from 'redux/options';



export const ContactList = () => {
  const contacts= useSelector(getFilterContacts)

  const dispatch= useDispatch();
  return (
    <>
      <ul>
        {contacts.map(({ name, phone, id }) => (
          <Item key={id}>
            <p>
              {name}
              <NumberText>{phone}</NumberText>
            </p>
            <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
          </Item>
        ))}
      </ul>
    </>
  );
  
};

