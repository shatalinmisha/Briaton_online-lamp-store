import addClient from "./addClient.js";

export default function applicationForm() {
    let name = document.querySelector('#name').value.trim();
    let email = document.querySelector('#email').value.trim();

    const client = {
        name: name,
        email: email,
    }

    addClient(client, email);



}

