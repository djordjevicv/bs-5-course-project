const ourForm = document.getElementById('our-form');
const username = document.getElementById('username');
const message = document.getElementById('message');
const email = document.getElementById('email');
const toastLiveExample = document.getElementById('liveToast');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

const handleSubmit = (e) => {
    e.preventDefault();
    toastBootstrap.show();
    username.value = '';
    email.value = '';
    message.value = '';
}

ourForm.addEventListener('submit', handleSubmit);