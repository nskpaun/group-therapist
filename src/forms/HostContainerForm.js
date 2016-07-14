import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = [];

const validate = (values) => {
  const errors = {};
  return errors;
};

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired
};

export class HostContainerForm extends Component {
  render() {
    const {
      fields: {},
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
      </form>
    );
  }
}

HostContainerForm.propTypes = propTypes;
HostContainerForm = reduxForm({
  form: 'HostContainerForm',
  fields,
  validate
})(HostContainerForm);

export default HostContainerForm;
