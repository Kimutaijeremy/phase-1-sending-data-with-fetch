// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    // Append the id to the DOM
    document.body.innerHTML = object.id;
  })
  .catch(function(error) {
    // Append error message to the DOM
    document.body.innerHTML = error.message;
  });
}
