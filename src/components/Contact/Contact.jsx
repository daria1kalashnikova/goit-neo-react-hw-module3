import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

function Contact({ id, username, phone, deleteContact }) {
  return (
    <li key={id} id={id} className={css.contact}>
      <div className={css.contactInfo}>
        <p>
          <FaUser className={css.contactInfoIcon} /> {username}
        </p>
        <p>
          <FaPhone className={css.contactInfoIcon} /> {phone}
        </p>
      </div>
      <button
        className="button"
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
