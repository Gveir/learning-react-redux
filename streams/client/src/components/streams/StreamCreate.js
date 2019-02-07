import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field
          name="title"
          component={this.renderInput}
          type="text"
          label="Enter Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          type="text"
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
