import React from "react";
import styles from "./BookTable.module.css";

function BookTable() {
  return (
    <section className={styles.book_table}>
      <div>
        <h2>BOOK A TABLE</h2>
        <form className={styles.book_table_form}>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            name="email"
          />

          <input
            type="number"
            id="number"
            placeholder="Number of Guests"
            name="number_guests"
          />

          <input
            type="time"
            id="time"
            placeholder="--:-- --"
            name="time"
          />

          <input
            type="date"
            id="date"
            placeholder="mm/dd/yyyy"
            name="date"
          />
        </form>
        <button>BOOK</button>
      </div>
    </section>
  );
}

export default BookTable;
