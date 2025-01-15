// Task 2: listUsers()

async function listUsers()
{
    let url = "http://localhost:3000/users";
    // Realiza la solicitud con fetch
    const response = await fetch(url);
    // Verifica si la solicitud fue exitosa

    if (!response.ok)
    {
        throw new Error(`Error en la solicitud: ${response.status}`);//crear hilo
    }
    // Convierte la respuesta a un objeto
    const objdata = await response.json();
    console.log(objdata);
}
listUsers();

