import React from "react";
import styles from "./BookTable.module.css";

function BookTable() {
  return (
    <section className={styles.book_table} id="book_table">
      <div className={`w-full px-[120px] py-[50px] ${styles.book_container}`}>
        <h2 className="text-7xl mb-12 font-medium">BOOK A TABLE</h2>
        <form className={styles.book_table_form}>
          <div className={styles.row_input}>
            <input className={styles.row_form_input}
              type="email"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className={styles.row_input}>
            <input className={styles.row_form_input}
              type="number"
              id="number"
              placeholder="Number of Guests"
              name="number_guests"
            />
          </div>
          <div className={styles.row_input}>
            <input className={styles.row_form_input} type="time" id="time" placeholder="--:-- --" name="time" />
          </div>
          <div className={styles.row_input}>
            <input className={styles.row_form_input} type="date" id="date" placeholder="mm/dd/yyyy" name="date" />
          </div>
        </form>
        <button className="inline font-normal text-center select-none  border-transperent text-white bg-[#ff214f] px-[1.1rem] py-[1.2rem] text-3xl mt-[2.6rem]">BOOK TABLE</button>
      </div>
    </section>
  );
}

export default BookTable;
