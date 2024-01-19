import Link from "next/link";
import { GrMonitor } from "react-icons/gr";
type Props = {
    posts: any[]
}

const Posts = ({posts}: Props) => {
    return(
        <div>
              <ul>
                {
                posts.map((data: any,id: any) => (
                        <li 
                        key={id}
                        className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  flex items-center cursor-pointer"
                        >
                            <div>
                                <GrMonitor />
                            </div>
                            <div className="pl-4 font-normal">
                               <Link href={`/dashboard/${data.id}`}>{data.name}</Link>                               
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export {Posts};