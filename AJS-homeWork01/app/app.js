let btnGetAPI = document.getElementById('getAPI');
let btnFetchAPI = document.getElementById('fetchAPI');
let table = document.getElementById('table');
let tBody = document.getElementById('tbody');


function runAjax() {
    $.ajax({
        url: 'https://www.balldontlie.io/api/v1/stats',
        method: 'GET', //if not specified defult value is GET
        success: function (response) {
            console.log(response);
            let users = response.data;
            for (const user of users) {
                tBody.innerHTML += `<tr>
                    <td>${user.player.first_name}</td>
                    <td>${user.player.last_name}</td>
                    <td>${user.player.height_feet}'` + `${user.player.height_inches}''</td>
                    <td>${user.player.position}</td>
                    <td>${user.pts}</td>
                    <td>${user.team.full_name}</td>
                </tr>
                `
            }
        },
        error: function (error) {
            console.log(error)
        }
    })
}


btnGetAPI.addEventListener('click', function () {
    table.style.display = 'inline-block';
    runAjax();
})


//how to get the second click work with for next page????
// btnGetAPI.addEventListener('click', function () {
//     table.style.display = 'inline-block';
//    runAjax()
// })

btnFetchAPI.addEventListener('click', function () {
    table.style.display = 'inline-block'
    fetch('https://www.balldontlie.io/api/v1/stats?page=2/')
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response);
            let users = response.data;
            for (const user of users) {
                tBody.innerHTML += `<tr>
                    <td>${user.player.first_name}</td>
                    <td>${user.player.last_name}</td>
                    <td>${user.player.height_feet}'` + `${user.player.height_inches}''</td>
                    <td>${user.player.position}</td>
                    <td>${user.pts}</td>
                    <td>${user.team.full_name}</td>
                </tr>
                `
            }

        })
        .catch(error => {
            console.log(error);
        })
})
