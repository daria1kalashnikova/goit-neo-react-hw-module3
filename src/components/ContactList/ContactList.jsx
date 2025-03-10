import css from "./ContactList.module.css";
import Contact from "/src/components/Contact/Contact";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css["contact-list"]}>
      {contacts.map((contact) => {
        return (
          <Contact
            username={contact.name}
            phone={contact.number}
            key={contact.id}
            id={contact.id}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;
