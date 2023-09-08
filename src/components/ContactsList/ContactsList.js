import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsWrapper, ContactsListSt } from './ContactsList.styles';

export const ContactsList = ({ allContacts, onDelete }) => {
  return (
    <ContactsWrapper>
      {allContacts.length !== 0 && (
        <>
          <ContactsListSt>
            {allContacts.map(item => (
              <ContactsItem key={item.id} item={item} onDelete={onDelete} />
            ))}
          </ContactsListSt>
        </>
      )}
    </ContactsWrapper>
  );
};
