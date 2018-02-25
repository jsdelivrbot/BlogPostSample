import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (

            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text"{...field.input} />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );

    }

    renderTextArea(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (

            <div className={className}>
                <label>{field.label}</label>
                <textarea {...field.input} type="text" className="form-control" />
                <div className="text-help">
                    {touched ? error : ''}
                </div>

            </div>
        );
    }

    onSubmit(values) {
        console.log("Form Data >> ", values);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });

    }

    render() {
        const { handleSubmit } = this.props;
        return (

            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" label="Title" component={this.renderField} />
                <Field name="categories" label="Categories" component={this.renderField} />
                <Field name="content" label="Content" component={this.renderTextArea} />

                <button type="submit" className="btn btn-primary"> Post </button>
                <Link to="/" className="btn btn-danger"> Cancel </Link>
            </form>

        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) { errors.title = "Enter title" }
    if (!values.categories) { errors.categories = "Enter Categories" }
    if (!values.content) { errors.content = "Enter Content" }

    return errors;

}

export default reduxForm({
    validate,
    form: 'newPostForm'
})(
    connect(null, { createPost })(PostNew)
);