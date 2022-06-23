//Создать скрипт, который формирует карточки с данными пользователей из данного массива объектов.


const users = [
{
"id": 1,
"email": "michael.lawson@reqres.in",
"first_name": "Michael",
"last_name": "Lawson",
"avatar": "https://reqres.in/img/faces/7-image.jpg",
},

{
"id": 2,
"email": "lindsay.ferguson@reqres.in",
"first_name": "Lindsay",
"last_name": "Ferguson",
"avatar": "https://reqres.in/img/faces/8-image.jpg",
},

{
"id": 3,
"email": "tobias.funke@reqres.in",
"first_name": "Tobias",
"last_name": "Funke",
"avatar": "https://reqres.in/img/faces/9-image.jpg",
}
];

const rootElem = document.querySelector('#root');

users.forEach(function({id, email, first_name, last_name, avatar}){
    const container = document.createElement('div');
    const idElem = document.createElement('p');
    const emailElem = document.createElement('a');
    const firstNameElem = document.createElement('p');
    const lastNameElem = document.createElement('p');
    const avatarElem = document.createElement('img');
    


    idElem.innerText = `ID: ${id}`;
    emailElem.innerText = email;
    firstNameElem.innerText = `First name: ${first_name}`;
    lastNameElem.innerText = `last name: ${last_name}`;


    avatarElem.setAttribute('src', avatar);
    avatarElem.setAttribute('alt', "avatar of users");
    emailElem.setAttribute('href', `mailto: ${email}`);

    container.classList.add('users');
    idElem.classList.add('id');
    emailElem.classList.add('email');
    firstNameElem.classList.add('first_name');
    lastNameElem.classList.add('last_name');
    avatarElem.classList.add('avatar');
    


    container.append(idElem, firstNameElem, lastNameElem, emailElem, avatarElem);
    rootElem.append(container);
});

//В карточке должно быть фото и ссылка на почту.