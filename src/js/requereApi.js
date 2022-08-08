const local = document.querySelector('.containerAPI'); 

// url 
const url = 'https://jsonplaceholder.typicode.com/users'; 

// fech 

function getData() {
    fetch(url, {method: 'GET'})
    .then(response => response.json())
    .then(
        responseDataFinish => {
            responseDataFinish.map(data => {

                const div = document.createElement('div'); 
                div.setAttribute('class', 'box-users')
                const bodyRequest = document.createElement('p'); 

                bodyRequest.innerHTML = `
                    Id: ${data.id}
                    Nome: ${data.name} </br>
                    Username: ${data.username} </br>
                    Email: ${data.email}
                `

                div.appendChild(bodyRequest)
                local.appendChild(div)
            })
        }
    ); 
}

getData()