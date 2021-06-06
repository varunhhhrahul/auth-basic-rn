import { withFormik } from 'formik';
import LoginForm from './LoginForm';
import * as Yup from 'yup';

//constants
import {
  EMAIL_INVALID_ERROR,
  EMAIL_NOT_LONG_ERROR,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_SHORT_ERROR,
} from '../../../constants/messages';

const EnhancedLoginForm = withFormik({
  mapPropsToValues: ({ token }) => ({
    email: '',
    password: '',
    method: 'email',
    pushToken: token,
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .min(3, EMAIL_NOT_LONG_ERROR)
      .max(255)
      .email(EMAIL_INVALID_ERROR)
      .required(EMAIL_REQUIRED),
    password: Yup.string()
      .required(PASSWORD_REQUIRED)
      .min(6, PASSWORD_SHORT_ERROR),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    console.log(values);
    setSubmitting(false);
  },
  displayName: 'LoginForm',
})(LoginForm);

export default EnhancedLoginForm;
