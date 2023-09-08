import { ListItemSt, ListItemButtonSt } from './ContactsItem.styled';

export const ContactsItem = ({ item: { id, name, number }, onDelete }) => {
  return (
    <ListItemSt key={id}>
      <p>
        {name} : {number}
      </p>
      <ListItemButtonSt type="button" onClick={() => onDelete(id)}>
        Delete
      </ListItemButtonSt>
    </ListItemSt>
  );
};
