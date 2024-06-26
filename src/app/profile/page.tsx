import { getServerSession } from "next-auth"
import { authConfig } from "../configs/auth"

export default async function Profile() {
    const session = await getServerSession(authConfig);
    return (
        <div>
            <h1>Источники в работе {session?.user?.name}</h1>
        </div>
    )
}
