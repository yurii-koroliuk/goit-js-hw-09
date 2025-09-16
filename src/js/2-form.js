// 2
const formElement = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
let formData = { email: '', message: '' };

const savedData = localStorage.getItem(storageKey);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData = parsedData;
  formElement.elements.email.value = parsedData.email;
  formElement.elements.message.value = parsedData.message;
}
formElement.addEventListener('submit', onFormSubmit);
formElement.addEventListener('input', onFormInput);

function onFormSubmit(event) {
  event.preventDefault();
  formData.email = formElement.elements.email.value.trim();
  formData.message = formElement.elements.message.value.trim();
  if (formData.email === '' || formData.message === '') {
    alert(`Fill please all fields`);
    return;
  }
  console.log(formData);
  localStorage.removeItem(storageKey);
  formElement.reset();
  formData.email = '';
  formData.message = '';
}

function onFormInput(event) {
  const formMeta = new FormData(formElement);
  for (const [key, value] of formMeta) {
    formData[key] = value.trim();
  }
  localStorage.setItem(storageKey, JSON.stringify(formData));
}
