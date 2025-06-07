const SERVER_URL = 'http://localhost:3000/user'

async function fetchData(id){
    try{
        const response = await fetch(`${SERVER_URL}?id=${id}`)

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Ошибка запроса');
        }

        const data = await response.json();
        console.log(data);
    }
    catch (ex){
        console.log(ex.message)
    }
} 

fetchData(10)

// { data: { id: '10', name: 'Name' } }