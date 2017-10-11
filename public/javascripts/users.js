$(document).ready(() => {
  console.log('document ready!')

  $('#newUserForm').submit((e) => {
    e.preventDefault()

    let data = $('#newUserForm').serialize()

    // token post to create a token 

    console.log("this is the newUser data: ", data)
    $.post("/api/coaches", data, null, 'json').then((data) => {
      console.log("POSTED data", data);
      document.location = '/coach';
    }).fail((err) => {
      console.error("THERE WAS AN ERROR WITH THE AJAX POST")
    })
  })


})
