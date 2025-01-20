// Task 4: delUser(number)
export function delUser(id)
{
    let strId = String(id);
    const serverURL = "http://localhost:3000";
    fetch(`${serverURL}/users/${strId}`, {
        method: "DELETE"
    })
}
