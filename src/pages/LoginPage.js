import { React, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const LoginPage = () => {
    const [uname, setuname] = useState()
    const [pass, setpass] = useState()
    const navigate = useNavigate()

    const setUser = (e) => setuname(e.target.value)
    const setPword = (e) => setpass(e.target.value)
    const submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/voter/voter-login",
            {
                "username": uname,
                "password": pass
            }
        ).then((res) => { console.log(res.status); navigate("/") })
            .catch(err => console.log(err))
    }
    return (
        <section class="text-gray-600 body-font">
            <form onSubmit={submit}>
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl text-gray-900">Next level Voting System</h1>
                        <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Log in</h2>
                        <div class="relative mb-4">
                            <label for="username" class="leading-7 text-sm text-gray-600">Username</label>
                            <input required onChange={setUser} type="text" id="username" name="username" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                            <input required type="password" onChange={setPword} id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type='submit' class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default LoginPage