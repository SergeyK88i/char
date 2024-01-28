"use client"
import myData from '@/app/data/source.json'
import Barchart from '@/app/dashboard/Barchart';
// import RecentOrders from '../RecentOrders';
import React, { useRef } from "react"
import Link from "next/link"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { getById } from './DownloadData';
// https://my-json-server.typicode.com/SergeyK88i/testDB/source
// async function getData(id: string) {
//     const response = await fetch(`https://my-json-server.typicode.com/SergeyK88i/testDB/source/${id}`, {
//         next: {
//             revalidate: 5
//         }
//     });
//     return response.json();
// }

// type Props = {
//     params: {
//         id: string;
//     }
// }
type Props = {
    post: any[]
    // downloadPDF: ()=>void;
  }

export default function TopDashboard({post}: any){
    // необходимо раскоментировать use client, функцию downloadPDF, добавить в Barchart функцию downloadPDF={downloadPDF}, в компоненте Barchart добавить props downloadPDF и аргумент в компонент barchart, добавить oneClick
    const pdfRef = useRef();

  const downloadPDF = () => {
    // const input = pdfRef.current;
            const input = document.getElementById("topDashboard");
        if (input !== null) {
            html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l','mm','a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 10;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            
            pdf.save('table.pdf');
            })
        } else {
            console.error('Элемент не найден.');
        }
  }
    // const post = await getData(id)

    
    // const post = await getById(id);

  
// const tasks = post.tasks[0];
console.log(post)
    const [OE_endYear, OE_endMonth, OE_endDay] = (post.story[2]?.duedate || []).split("-") ;
    const [OE_startYear, OE_startMonth, OE_startDay] = post?.story[2].planned_end.split("-")

    const [v1, v2, v3, v4, v5, v6, v7] = post?.description.split("*")


    return (
        <div id="topDashboard" className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
         {/* <div ref={pdfRef}> */}
        {/* <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"> */}
            <div className="grid lg:grid-cols-10 p-4 gap-2 pb-0">
                <div className="lg:col-span-3 col-span-1 flex justify-between w-full bg-white  border p-4 rounded-lg">
                    <div className="flex flex-col w-full">
                        <h2><span className="font-bold">Блок:</span> {post?.corporate_unit} </h2>
                        
                        <h1 className="my-5 "> <span className="font-bold">Источник:</span> {post?.name}</h1>
                        {/* {post?.tasks[0].duedate} */}
                        <p><span className="font-bold">КЭ:</span> {post.ci}</p>
                        <p><span className="font-bold">Отв. от ДИТ:</span> {post?.assignee_displayName_DIT}</p>
                        <p><span className="font-bold">Отв. от SD:</span> {post?.assignee_displayName_CAP} </p>
                    </div>
                </div>
                <div className="lg:col-span-2 col-span-1 flex flex-col w-full bg-white  border p-4 rounded-lg text-sm">
              
                <ul>
                    <li>{v1}</li>
                    <li>{v2}</li>
                    <li>{v3}</li>
                    <li>{v4}</li>
                    <li>{v5}</li>
                    <li>{v6}</li>
                    <li>{v7}</li>
                </ul>
                {/* <div className="row text-center mt-5">
                    <button className="btn btn-primary" onClick={downloadPDF}>Download PDF</button>
                </div> */}
                </div>
                <div className="lg:col-span-2 col-span-1 flex justify-between w-full bg-white border p-4 rounded-lg">
                    <ul className="text-left w-full ">
                    <li><span className="font-bold">Сдвиг сроков ОЭ:</span></li>
                    <li className="my-7">Общий сдвиг : <span className="font-bold text-red-500">{post?.days_shift_all} дн.</span></li>
                    <p>Текущий сдвиг :  </p>
                    <p>
                    {OE_startDay}.{OE_startMonth}.{OE_startYear} {'->'} {OE_endDay}.{OE_endMonth}
                    <span className="font-bold text-red-500"> (+ {post?.days_shift} дн.) </span>
                    </p>
                    </ul>
                    
                </div>
                
                <div className="lg:col-span-3 col-span-1 flex text-center justify-between w-full bg-white border p-4 rounded-lg ">
                    <h1>Проблемы, влияющие на исполнение планов: </h1>
                </div>
                
            </div>
            <div className="px-4 pt-2 pb-8 grid md:grid-cols-12 grid-cols-1 gap-2">
                
                <Barchart downloadPDF={downloadPDF} data={post}/>
               
                {/* <RecentOrders /> */}
                
                {/* <Barchart data={post}/> */}
            </div>
        </div>
    )
}
