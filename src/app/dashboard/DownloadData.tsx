export const getAllData = async() => {
    const response = await fetch("https://my-json-server.typicode.com/SergeyK88i/testDB/source");
    if (!response.ok) throw new Error("Unable to fetch posts.");
    
    return response.json();
};