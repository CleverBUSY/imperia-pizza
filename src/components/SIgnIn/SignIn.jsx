import axios from '../../users/index'
import React, { useState } from 'react'

const SignIn = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const onChange = ({ target }) => {
        const { name, value } = target
        console.log(name, value);
        setData((prevData) => ({
            ...prevData, [name]: value
        }))
    }
    
    const login = async () => {
        console.log(data, "------data-------");
       const res = await axios.post("/users", data)
       console.log(res);
    }

    return (
        <section class=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div class="mx-auto w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 class="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                        <input onChange={onChange} type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="password" class="leading-7 text-sm text-gray-400">
                            Password user
                        </label>
                        <input onChange={onChange} type="password" id="password" name="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button onClick={login} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Login
                    </button>
                    <p class="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
        </section>
    )
}

export default SignIn