import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-500 text-white p-4 font-bold rounded-md mb-8'>Tailwind Test</h1>

      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQgwnMtJT36F27CWGW1jnc0r8pyIKBWVVXB0ap2vmsg&s" 
              alt="" width="384" height="512"/>
            <div class="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                  <p class="text-lg font-medium">
                  Rohit Gurunath Sharma is an Indian international cricketer
                  who currently captains the India national cricket team across all formats. 
                  He is a right-handed batsman.
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                      Rohit Sharma
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                      Indian Cricketer
                    </div>
                </figcaption>
            </div> 
        </figure>*/}

        {/* <div class="relative h-[400px] w-[300px] rounded-md">
              <img
              src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="AirMax Pro"
              class="z-0 h-full w-full rounded-md object-cover"/>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-left">
                  <h1 class="text-lg font-semibold text-white">Delba</h1>
                  <p class="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                  </p>
                  <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    View Profile →
                  </button>
            </div>
        </div> */}


    </>
  )
}

export default App
