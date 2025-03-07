import React from 'react'
import { Link } from 'react-router-dom'


const SignUp = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label className="block text-gray-700">Full Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Confirm your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Sign in
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Already have an account? <Link to={"/login"} a href="#" className="text-blue-500 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUp

