import React, { useState } from "react"
import PropTypes from "prop-types"
import { PAGE_CONTENT } from "../config/constants"

const Newsletter = ({ actionUrl, handleSubmittedForm }) => {
  const btnText = PAGE_CONTENT["subscribe_form_btn"]
  const description = PAGE_CONTENT["subscribe_description"]
  const thankYouMsg = PAGE_CONTENT["subscribe_thankyou"]
  const tahnkYouDesc = PAGE_CONTENT["subscribe_msg"]
  const emailPlaceholder = PAGE_CONTENT["subscribe_form_email"]

  const [isSubmited, setSubmit] = useState(false)
  const [formInputs, setFormInputs] = useState({
    email: "",
  })
  let formContent
  if (!actionUrl) return

  const handleSubmit = e => {
    e.preventDefault()

    const { email } = formInputs

    //{"success":false,"errors":{"fields":{"email":["The email field is required."]}}}

    const params = `fields[email]=${email}`
    //&fields[name]=...

    // Send a POST request
    fetch(actionUrl, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      method: "POST",
      body: params,
    })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          setSubmit(true)
          if (handleSubmittedForm) {
            handleSubmittedForm(true)
          }
        }
      })
      .catch(error => console.log(error))
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormInputs({
      ...formInputs,
      [name]: value,
    })
  }

  formContent = (
    <div className="flex flex-wrap mt-10" onSubmit={handleSubmit}>
      <form className="relative flex rounded-full w-full max-w-sm bg-gray-200 order-last md:order-first">
        <input
          type="email"
          className="form-input px-4 py-3 rounded-full border-0 bg-gray-200 w-full"
          placeholder={emailPlaceholder}
          name="email"
          autocomplete="email"
          value={formInputs.email}
          onChange={handleInputChange}
          required
        />

        <button
          className="rounded-full text-xl bg-black hover:bg-blue-500 text-white py-1 px-4 ml-auto min-w-fit"
          type="submit"
        >
          {btnText}
        </button>
      </form>
      <p className="max-w-xs font-light text-lg leading-tight mb-3 md:my-auto ml-3">
        {description}
      </p>
    </div>
  )

  if (isSubmited) {
    formContent = (
      <div className="inline-block border border-emerald-500 p-3 rounded">
        <p className="text-black font-bold text-xl mb-0">{thankYouMsg}</p>
        <p className="mb-0 text-emerald-500">{tahnkYouDesc}</p>
      </div>
    )
  }

  return formContent
}

Newsletter.defaultProps = {
  handleSubmittedForm: null,
}

Newsletter.propTypes = {
  handleSubmittedForm: PropTypes.func,
}

export default Newsletter
