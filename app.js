// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get Input text
  const userText = e.target.value;

  if (userText !== '') {
    // console.log(userText);
    // Make http call
    github.getUser(userText)
      .then(data => {
        // console.log(data);
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});