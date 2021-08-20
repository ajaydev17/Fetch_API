// Event listener for get text button

document.getElementById("button-gettext").addEventListener("click", getText);

function getText() {
    fetch("text.txt")
        .then(function (result) {
            return result.text();
        })
        .then(function (data) {
            document.getElementById("output").innerHTML = data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Event listener for get json button

document.getElementById("button-getjson").addEventListener("click", getJson);

function getJson() {
    fetch("post.json")
        .then(function (result) {
            return result.json();
        })
        .then(function (data) {
            let output = "";
            data.forEach(function (post) {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Event listener for get api data

document
    .getElementById("button-getapidata")
    .addEventListener("click", getAPIData);

function getAPIData() {
    fetch("https://api.github.com/users")
        .then(function (result) {
            return result.json();
        })
        .then(function (data) {
            let output = "";
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(function (error) {
            console.log(error);
        });
}
