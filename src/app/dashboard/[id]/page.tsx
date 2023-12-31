import myData from '@/app/data/source.json'

async function getData(id: string) {
    const response = await fetch(`http://localhost:8080/users/${id}`, {
        next: {
            revalidate: 5
        }
    });
    return response.json();
}

type Props = {
    params: {
        id: string;
    }
}


export default async function TopDashboard({params: {id} }: Props){
    const post = await getData(id)
    return (
        <div className="grid lg:grid-cols-10 p-4 gap-2">
            <div className="lg:col-span-3 col-span-1 flex justify-between w-full bg-white  border p-4 rounded-lg">
                <div className="flex flex-col w-full">
                    {/* <h2>Блок: КИБ </h2> */}
                    
                    <h1 className="my-5 text-green-600 font-bold">Источник: {post?.name}</h1>
                    
                    {/* <p>КЭ: 000001</p> */}
                    <p className='text-green-500'>Отв. от ДИТ: {post?.email}</p>
                    {/* <p>Отв. от SD: Солнцев А. В.</p> */}
                </div>
            </div>
            <div className="lg:col-span-2 col-span-1 flex justify-between w-full bg-white  border p-4 rounded-lg"></div>
            <div className="lg:col-span-2 col-span-1 flex justify-between w-full bg-white border p-4 rounded-lg">
                <ul className="text-left w-full ">
                <li>Сроки:</li>
                <li className="my-7">Общий сдвиг</li>
                <li>Текущий сдвиг</li>
                </ul>
                
            </div>
            
            <div className="lg:col-span-3 col-span-1 flex text-center justify-between w-full bg-white border p-4 rounded-lg ">
                <h1>Проблемы, влияющие на исполнение планов: </h1>
            </div>
        </div>
    )
}