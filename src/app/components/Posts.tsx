import Link from "next/link";
import { GrMonitor } from "react-icons/gr";
type Props = {
    posts: any[]
}

const Posts = ({posts}: Props) => {
    return(
        <div>
              <ul className="w-full">
                {
                posts.map((data: any,id: any) => (
                    <Link href={`/dashboard/${data.id}`}>
                         <li 
                        key={id}
                        className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  flex items-center cursor-pointer "
                        
                        >
                            <div>
                                <GrMonitor />
                            </div>
                            <div className="pl-4" style={{color: "red"}}>
                                {data.duedate}
                            </div>
                            <div className="pl-4 font-normal">
                               {data.name}                              
                            </div>

                        </li>
                        </Link> 
                    ))
                }
            </ul>
        </div>
    )
}
export {Posts};