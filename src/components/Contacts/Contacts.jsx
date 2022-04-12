import PropTypes from 'prop-types';
import { ContactList} from './Contacts.styled'
import { ContactItem } from '../ContactItem/ContactItem';
export const Contacts = ({ contacts, onDeleteContact }) => {
    return (
        <ContactList>
            {contacts.map(({ id, name, number }) => 
                <ContactItem key={id} id={id} name={name} number={number} onDelete={ ()=>{onDeleteContact(id)}}/>
            )}
        </ContactList>
    )
}
Contacts.propTypes = {
    onDeleteContact: PropTypes.func,
    contacts:PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),),
}