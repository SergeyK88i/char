import xlsx, { IJsonSheet } from 'json-as-xlsx'
import { getAllData } from './DownloadData';
// import { getData } from '../table/page'

export async function downloadToExcel() {
    let columns: IJsonSheet[] = [
        {
            sheet: "Общее",
            columns: [
                {label:"ID Загрузки",value: 'id'},
                {label:"Источник",value: 'name'},
                {label:"Блок",value: 'block'},
                {label:"Статус Эпика",value: 'statusEpic'},
                {label:"Текущий статус",value: 'changeStatus'},
                {label:"Отв. от SD",value: 'person'},
            ],
            content: await getAllData(),
        },

    ];
    let settings = {
        fileName: "Dashboard Excel"
    }
    xlsx(columns,settings);
}


