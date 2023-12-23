import myData from '@/app/data/source.json'
export default function TopDashboard(){
    return (
        <div className="grid lg:grid-cols-10 p-4 gap-2">
            <div className="lg:col-span-3 col-span-1 flex justify-between w-full bg-white  border p-4 rounded-lg">
                <div className="flex flex-col w-full">
                    <h2>Блок: КИБ </h2>
                    
                    <h1 className="my-5">Источник: Выписка ЮЛ</h1>
                    
                    <p>КЭ: 000001</p>
                    <p>Отв. от ДИТ: Ромашкин А. И.</p>
                    <p>Отв. от SD: Солнцев А. В.</p>
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