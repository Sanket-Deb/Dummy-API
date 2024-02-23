fetch('https://dummyjson.com/users')
    .then( res => {
        return res.json();
    })
    .then( data => {
        const users = data.users;
        users.forEach(users => {
            const markup = `<li>${users.firstName}</li>`;

            document.querySelector('ul').insertAdjacentHTML('beforeend' , markup);
        });
    })
    .catch(error => console.log(error));