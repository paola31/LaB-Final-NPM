// Task 2: listUsers()

const outArray =
    [
        {
        "id": 1,
        "first_name": "Joshua",
        "last_name": "Diaz",
        "email": "j3@example.com"
    },
    {
        "id": 2,
        "first_name": "Song",
        "last_name": "Gonzalez",
        "email": "sgo@example.com"
    },
    {
        "id": 3,
        "first_name": "Milagro",
        "last_name": "Juarez",
        "email": "miljua23@example.com"
    },
    {
        "id": 4,
        "first_name": "Olivia",
        "last_name": "Brown",
        "email": "olibrown432@example.net"
    }
    ];

export async function listUsers()
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

    console.log(JSON.stringify(outArray, null, 1)
        .replace(/"([^"]+)":/g, '$1:')
        .replace(/"([^"]+)"/g, "'$1'")
    );
}