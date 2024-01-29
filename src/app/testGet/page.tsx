async function getData() {
    const response = await fetch("https://my-json-server.typicode.com/SergeyK88i/testDB/source");
    return response.json();
}

export default async function Name() {
    const data = await getData();
    console.log("данные из нового компонента с использованием getData()",data);
    return (
        <p>Hello get data</p>
    )
}