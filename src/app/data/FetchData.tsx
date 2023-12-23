import myData from '@/app/data/source.json'
import React from 'react';



// export default function FetchData() {
//     return(
//         <div>
//             {
//                 myData.map((data,i) => (
//                     <div key={i}>
//                         <h1>{data.name}</h1>
                        
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }




// async function getData() {
//     const response = await fetch('./source', {
//       next: {
//         revalidate: 10
//       }
//     });
//     return response.json();
    
//   }

//   export default async function Post() {
//     const post = await getData();
//     console.log(post);
//     return (
//     <>
//     <h3>{post.id}</h3>
    
//     </>
//     )
// }