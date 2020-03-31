//Validate zipcode
export function isValidZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

//Display alert message
export function showAlert(message, className) {
  // create div
  const div = document.createElement('div');
  // add classes
  div.className = `alert alert-${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  // get container
  const container = document.querySelector('.container');
  // get form
  const form = document.querySelector('#pet-form');
  //insert the alert
  container.insertBefore(div, form);

  //go away up to 3s
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}
