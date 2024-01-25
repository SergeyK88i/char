import Image from 'next/image'
import Header from './components/Header'
import Slidebar from './components/Slidebar'

export default function Home() {
  return (
    
     
    
    <main>
    
    {/* main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      

      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex "> */}
      <div className='flex justify-between items-center my-20'>
      
                  {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Get started by editing&nbsp;
              <code className="font-mono font-bold">src/app/page.tsx</code>
              </p> */}
                
                  <div className="w-1/4">
                  <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-green-100">
                    <a
                      href="http://localhost:3000/dashboard"
                      // className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-green-500 hover:bg-green-100"
                      // target="_blank"
                      // rel="noopener noreferrer"
                      
                    >
                      <h2 className={`mb-3 text-2xl font-semibold`}>
                        STEP 1. 
                        Дашборд{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Автоматизация дорожных карт
                        </p>
                    </a>
                    </div>
                  </div>
                            <div className='w-1/4'>
                            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-gray-100">

                                    <a
                                      // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                      // className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <h2 className={`mb-3 text-2xl font-semibold`}>
                                      STEP 2.{' '}
                                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                          -&gt;
                                        </span>
                                        </h2>
                                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                        {/* Learn about Next.js h&nbsp;quizzes! */}
                                        шаг 2
                                        </p>

                                    </a>
                                    </div>
                            </div>

                                <div className='w-1/4'>
                                <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-gray-100">

                                        <a
                                          // href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                                          // className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <h2 className={`mb-3 text-2xl font-semibold`}>
                                          STEP 3.{' '}
                                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                              -&gt;
                                            </span>
                                          </h2>
                                          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                            {/* templates for Next.js. */}
                                            шаг 3
                                          </p>
                                        </a>
                                        </div>
                                </div>

                              <div className='w-1/4'>
                              <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-gray-100">

                                      <a
                                        // href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                                        // className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <h2 className={`mb-3 text-2xl font-semibold`}>
                                        STEP 4.{' '}
                                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                            -&gt;
                                          </span>
                                          </h2>
                                          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                          {/* Instantly deploy your Next.js */}
                                          шаг 4
                                          </p>
                                      </a>
                                      </div>
                              </div>
              <div className=" mr-10 relative flex place-items-center before:absolute before:h-[30px] before:w-[48px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Image
                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/Sber_znachek_green.svg"
                alt="/Sber_znachek_green.svg"
                width={170}
                height={170}
                priority
              />
            </div> 
      </div>
      
    

     
  </main>
    
  )
}
