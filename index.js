document.getElementById('fetchUsersBtn').addEventListener('click', function() {
    fetchUsers();
});

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            displayUsers(data.data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}

function displayUsers(users) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = ''; // Clear previous content

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        avatar.alt = 'User Avatar';

        const name = document.createElement('p');
        name.textContent = `Name: ${user.first_name} ${user.last_name}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;

        userCard.append(avatar);
        userCard.append(name);
        userCard.append(email);

        userContainer.append(userCard);
    });
}
