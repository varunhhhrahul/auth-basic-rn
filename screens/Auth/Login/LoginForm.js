import React from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { SECONDARY } from '../../../constants/colors';
import { CustomInput } from '../../../components/CustomInput';
import { CustomFormButton } from '../../../components/CustomFormButton';
import LogoComponent from '../../../components/LogoComponent';

const LoginForm = (props) => {
  const check = false;
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    props;

  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={0}>
      <ScrollView keyboardShouldPersistTaps='handled' style={styles.screen}>
        <LogoComponent marginBottom={20} />
        <CustomInput
          values={values}
          errors={errors}
          placeholder='Email'
          field='email'
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
        />
        <CustomInput
          values={values}
          errors={errors}
          placeholder='Password'
          field='password'
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          secure={true}
        />

        <CustomFormButton
          // loading={loading}
          label='Login'
          handleSubmit={handleSubmit}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

LoginForm.propTypes = {};

const styles = StyleSheet.create({
  button: {
    marginVertical: 15,
    marginHorizontal: 10,
    borderColor: SECONDARY,
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
    top: 298,
    right: 15,
  },
  screen: {
    padding: 10,
    margin: 10,
    flex: 1,
  },
});

export default LoginForm;
