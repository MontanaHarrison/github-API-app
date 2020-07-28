function getUserRepos() {
    const name = $('#user').val();
    fetch(`https://api.github.com/users/${name}/repos`)
      .then(response => response.json())
      .then(responseJson =>
        displayResults(responseJson))
      .catch(error => alert('Error. Try again later.'));
  }
  
  function displayResults(responseJson) {
    console.log(responseJson);
    $('#repo-list').empty();
    for (let i = 0; i < responseJson.length; i++) {
      $('#repo-list').append(
        `<li><h2><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h2></li>`
      );
    };
  };
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getUserRepos();
    });
  };
  
  watchForm();