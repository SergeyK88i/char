"use client"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import type { FormEventHandler } from "react"
import Image from 'next/image'

const SignInForm = () => {
    const router = useRouter()
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
       const res = await signIn('credentials', {
            email:formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });
        if (res && !res.error) {
            router.push('/dashboard')
        } else {
            console.log(res)
        }
    }
    return (
        <main className="flex items-center justify-center h-screen bg-gray-100 rounded-lg">
            <form onSubmit={handleSubmit}>
                <div className="bg-white w-96 p-6 rounded shadow-sm">
                    <div className="flex flex-col mb-4">
                        <div className="flex items-center justify-center">
                            <Image
                                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/Sber_znachek_green.svg"
                                alt="/Sber_znachek_green.svg"
                                width={80}
                                height={80}
                                priority
                            />
                        </div>
                        <label className="text-gray-500">Email</label>
                        <input 
                            className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4 rounded-lg"
                            type="email" 
                            name="email" 
                            required
                        />
                        <label className="text-gray-500">Password</label>
                        <input 
                            className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4 rounded-lg"
                            type="password" 
                            name="password" 
                            required
                        />
                        {/* <input
                        id="remember"
                        className="mb-4"
                        type="checkbox"
                        />
                        <label for="remember">Запомнить логин</label> */}
                        <button
                        type="submit"
                        className="bg-green-600 w-full text-gray-100 py-2 rounded-lg hover:bg-green-500"
                        > 
                        Авторизоваться
                        </button>
                        
                    </div>
                </div>
                {/* <input type="email" name="email" required /> */}
                {/* <input type="password" name="password" required /> */}
                {/* <button type="submit"> Sign In </button> */}
            </form>
        </main>
    )
}
export { SignInForm }