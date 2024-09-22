import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations'; 

const ContactValidationSchema = Yup.object().shape({
  contactName: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  contactNumber: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const submitForm = (values, actions) => {
    const newContact = {
      name: values.contactName,
      number: values.contactNumber,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        contactName: '',
        contactNumber: '',
      }}
      onSubmit={submitForm}
      validationSchema={ContactValidationSchema}
    >
      {formik => {
        const isFormEmpty = !formik.values.contactName || !formik.values.contactNumber;
        return (
          <Form className={style.form}>
            <label className={style.lbl}>
              <span className={style.lblText}>Name</span>
              <Field className={style.inp} type="text" name="contactName" required />
              <ErrorMessage className={style.errorMessage} name="contactName" component="span" />
            </label>
            <label className={style.lbl}>
              <span className={style.lblText}>Number</span>
              <Field className={style.inp} type="tel" name="contactNumber" required />
              <ErrorMessage className={style.errorMessage} name="contactNumber" component="span" />
            </label>
            <div className={style.btnContainer}>
              <button
                className={style.btn}
                disabled={isFormEmpty || !formik.isValid || formik.isSubmitting}
                type="submit"
              >
                Add contact
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
