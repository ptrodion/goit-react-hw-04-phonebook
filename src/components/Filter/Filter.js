import { ContactsFilterByName, ContactsFilterTitle } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <div>
      <ContactsFilterTitle>Contacts</ContactsFilterTitle>
      <label>
        Find contacts by name
        <ContactsFilterByName
          type="text"
          value={filter}
          onChange={evt => {
            onFilter(evt.target.value);
          }}
        ></ContactsFilterByName>
      </label>
    </div>
  );
};
