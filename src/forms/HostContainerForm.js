import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = ['newOnCall'];

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
      fields: {newOnCall},
      handleSubmit,
      onSetNewOnCall,
    } = this.props;

    return (
      <form onSubmit={handleSubmit(onSetNewOnCall)}>
        <div>
          <label>New On Call</label>
          <input type="text" {...newOnCall}/>
        </div>
        <button type="submit">Submit</button>
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
