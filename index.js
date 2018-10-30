function handleFormSubmission(event) {
  event.preventDefault()
  const form = document.querySelector('#contact_us_form')
  const { name, email, question, severity } = form

  const contactUsData = {
    name: name.value.trim(),
    email: email.value,
    questionText: question.value,
    id: '2c9985ab668037e00166b31c796134ef',
    metadata: {
      source_page: window.location.href,
      date: new Date().toDateString(),
      severity: severity.value,
      simple_name: name.value.split(' ').length > 1 ? false : true,
    },
  }

  console.log('%c⚠️', 'font-size: 10em')
  console.log('Check out the contact us data: ', contactUsData)

  if (severity.value === 'Low' || severity.value === 'Medium') {
    DirectlyRTM('askQuestion', contactUsData)
  }

  form.reset()
}
