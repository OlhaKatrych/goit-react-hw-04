import css from "./SearchBar.module.css";

import { Formik, Form, Field } from "formik";
import { GoSearch } from "react-icons/go";
import toast, { Toaster } from 'react-hot-toast';

function SearchBar({ onSearch }) {
  return (
    <div className={css.container}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, actions) => {
          if(values.search === ""){

            toast.error('Please enter a search term!');
          }
          onSearch(values.search);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field type="text" name="search" className={css.input} />
          <button type="submit" className={css.btn}>
            <GoSearch />
          </button>
          <Toaster />
        </Form>
      </Formik>
    </div>
  );
}

export default SearchBar;
