import { Formik } from 'formik';

import {
  FormStyle,
  LabelStyle,
  FieldStyle,
  ButtonStyle,
} from './ContactsForm.styled';

export const ContactForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={(value, actions) => {
          onAdd(value);
          actions.resetForm();
        }}
      >
        <FormStyle>
          <LabelStyle>
            Name
            <FieldStyle
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelStyle>
          <LabelStyle>
            Number
            <FieldStyle
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelStyle>
          <ButtonStyle type="submit">Add contact</ButtonStyle>
        </FormStyle>
      </Formik>
    </div>
  );
};
