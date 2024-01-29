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
                {label:"Блок",value: 'corporate_unit'},
                {label:"Статус Эпика",value: 'status'},
                {label:"Текущий статус",value: 'change'},
                {label:"Отв. от SD",value: 'assignee_displayName_CAP'},
            ],
            content: await getAllData(),
            
        },

    ];
    
    let settings = {
        fileName: "Dashboard Excel"
    }
    xlsx(columns,settings);
}


