import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
import { login, registerUser } from '../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';

const BASE_URL = import.meta.env.VITE_BASE_URL
// console.log(BASE_URL)

// const axiosClient = axios.create({
//     baseURL: BASE_URL,
// })

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.auth);



    const userData = {
        email: email,
        password: password,
    }

    console.log(userData)

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const data = await dispatch(login(userData))
            console.log(data)
            const status = data.payload.status;
            console.log(status)

            if (status === true) {
                swal({
                    icon: "success",
                    title: `${data.payload.data.firstName || "Login Successful!"}`,
                    text: `${data.payload.message || "Welcome back!"}`,
                });
                navigate("/dashboard");
            } else {
                console.log(data.payload);
                swal("Oops", `${data.payload.message}`, "error")
                navigate("/login");

            }

        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            swal({
                icon: "error",
                title: "Login Failed",
                text: error.response?.data?.message || "Something went wrong!",
            });
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="text-blue-500" />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                        </div>
                        <button
                            type="submit"
                            onClick={handleLogin}
                            className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Don't have an account? <Link to={"/sign-up"} a href="#" className="text-blue-500 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
