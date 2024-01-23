"use client"
import myData from '@/app/data/source.json'
import Barchart from '../Barchart';
import RecentOrders from '../RecentOrders';
import React, { useRef } from "react"
import Link from "next/link"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { getById } from '../DownloadData';
// https://my-json-server.typicode.com/SergeyK88i/testDB/source
// async function getData(id: string) {
//     const response = await fetch(`https://my-json-server.typicode.com/SergeyK88i/testDB/source/${id}`, {
//         next: {
//             revalidate: 5
//         }
//     });
//     return response.json();
// }

type Props = {
    params: {
        id: string;
    }
}


export default async function TopDashboard({params: {id} }: Props){
    // const pdfRef = useRef();

  const downloadPDF = () => {
//     const input = pdfRef.current;
    const input = document.getElementById("topDashboard");
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
  }
    // const post = await getData(id)
    const post = await getById(id);
    console.log(post)
    return (
        <div id="topDashboard">
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
                <div className="lg:col-span-2 col-span-1 flex justify-between w-full bg-white  border p-4 rounded-lg">
                {/* <div className="row text-center mt-5">
                    <button className="btn btn-primary" onClick={downloadPDF}>Download PDF</button>
                </div> */}
                </div>
                <div className="lg:col-span-2 col-span-1 flex justify-between w-full bg-white border p-4 rounded-lg">
                    <ul className="text-left w-full ">
                    <li><span className="font-bold">Сроки:</span></li>
                    <li className="my-7">Общий сдвиг : <span className="font-bold text-red-500">{post?.days_shift_all} дн.</span></li>
                    <li>Текущий сдвиг : <span className="font-bold text-red-500">{post?.days_shift} дн.</span> </li>
                    </ul>
                    
                </div>
                
                <div className="lg:col-span-3 col-span-1 flex text-center justify-between w-full bg-white border p-4 rounded-lg ">
                    <h1>Проблемы, влияющие на исполнение планов: </h1>
                </div>
                
            </div>
            <div className="px-4 pt-2 pb-8 grid md:grid-cols-12 grid-cols-1 gap-2">
                
                <Barchart downloadPDF={downloadPDF} data={post}/>
                
                {/* <RecentOrders /> */}
                
                
            </div>
        </div>
    )
}
// получили один объект по клику, теперь необходимо этот объект передать в файл data и от туда взять уже нужные поля