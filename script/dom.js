// // Single Element Selector

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// // Multiple Element Selector

// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.querySelectorAll('.item'));

// // Iterating Element

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// // Manipulating Element

// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.firstElementChild.remove();

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].textContent = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// // Styling

// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'green';
// btn.style.cursor = 'pointer';

// // Events

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.target.style.backgroundColor = 'red';
//     document.querySelector('#my-form').style.backgroundColor = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value, emailInput.value);

    if (nameInput.value === '' || emailInput.value === '') {
        console.error('Please enter all fields');
        msg.classList.add('error');
        msg.textContent = 'please enter all fields.';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
        );
        users.appendChild(li);

        // Clear Fileds
        nameInput.value = '';
        emailInput.value = '';
    }
}
