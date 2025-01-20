// Task 3: addUser(first_name, last_name, email)

export function addUser(firstName, lastaName, email)
{
    const newUser = {
        id: "6",
        first_name: firstName,
        last_name: lastaName,
        email: email
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',  // Metodo del request es POST
        headers: {
            'Content-Type': 'application/json',  // Cabecera para indicar que se esta enviando json como contenido
        },
        body: JSON.stringify(newUser)  // Se convierte el objeto a string con formato json
    })
        .then(response => response.json())  // se convierte la respuesta a formato json
        .then(data => {
            console.log('Nuevo usuario agregado:', data);  // Se imprimie el usuario creado  para verificar
        })
        .catch(error => {
            console.error('Error al agregar el usuario:', error);
        });
}