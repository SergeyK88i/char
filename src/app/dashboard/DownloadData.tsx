
export const getAllData = async() => {
    const response = await fetch("https://my-json-server.typicode.com/SergeyK88i/testDB/source", {
        next: {
            revalidate: 5
        }
    });
    // if (!response.ok) throw new Error("Unable to fetch posts.");

   
    return response.json();
};

export const getById = async (id: string) => {
    const response = await fetch(`https://my-json-server.typicode.com/SergeyK88i/testDB/source/${id}`, {
        next: {
            revalidate: 5
        }
    });
    return response.json();
}