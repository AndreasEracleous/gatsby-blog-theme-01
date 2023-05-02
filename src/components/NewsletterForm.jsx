import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { PAGE_CONTENT } from '../config/constants';

const Newsletter = ({ actionUrl, handleSubmittedForm }) => {
  const btnText = PAGE_CONTENT.subscribe_form_btn;
  const description = PAGE_CONTENT.subscribe_description;
  const thankYouMsg = PAGE_CONTENT.subscribe_thankyou;
  const tahnkYouDesc = PAGE_CONTENT.subscribe_msg;
  const emailPlaceholder = PAGE_CONTENT.subscribe_form_email;

  const [isSubmited, setSubmit] = useState(false);
  const [formInputs, setFormInputs] = useState({
    email: '',
  });
  let formContent;
  if (!actionUrl) return;

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email } = formInputs;

    // {"success":false,"errors":{"fields":{"email":["The email field is required."]}}}

    const params = `fields[email]=${email}`;
    // &fields[name]=...

    // Send a POST request
    fetch(actionUrl, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      method: 'POST',
      body: params,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setSubmit(true);
          if (handleSubmittedForm) {
            handleSubmittedForm(true);
          }
        }
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  formContent = (
    <div className="mt-8 flex flex-col justify-center">
      <p className="mb-3 text-center text-lg font-light leading-tight">{description}</p>
      <form
        className="relative mx-auto flex w-full max-w-sm justify-center rounded-full bg-gray-200"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className="form-input w-full rounded-full border-0 bg-gray-200 px-4 py-3"
          placeholder={emailPlaceholder}
          name="email"
          autoComplete="email"
          value={formInputs.email}
          required
          onChange={handleInputChange}
        />

        <button
          className="ml-auto min-w-fit rounded-full bg-gray-800 px-4 py-1 text-base uppercase tracking-widest text-white hover:bg-gray-600"
          type="submit"
        >
          {btnText}
        </button>
      </form>
    </div>
  );

  if (isSubmited) {
    formContent = (
      <div className="inline-block rounded border border-emerald-500 p-3">
        <p className="mb-0 text-xl font-bold text-black">{thankYouMsg}</p>
        <p className="mb-0 text-emerald-500">{tahnkYouDesc}</p>
      </div>
    );
  }

  return formContent;
};

Newsletter.defaultProps = {
  handleSubmittedForm: null,
};

Newsletter.propTypes = {
  handleSubmittedForm: PropTypes.func,
};

export default Newsletter;
