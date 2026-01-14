import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAuthErrorMessage } from "../utils/errorMessages";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signup } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signup(email, password);
            navigate("/");
        } catch (error) {
            console.log(error);
            const errorMessage = getAuthErrorMessage(error.code);
            setError(errorMessage);
        }
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-screen">
                <img
                    className="hidden sm:block absolute w-full h-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg"
                    alt="/"
                />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-112.5 h-150 mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            {error && (
                                <p className="p-3 my-2 bg-red-600 rounded text-white text-sm">
                                    {error}
                                </p>
                            )}
                            <form
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col py-4"
                            >
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="p-3 my-2 bg-gray-700 rounded"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="p-3 my-2 bg-gray-700 rounded"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                />
                                <button className="bg-red-600 py-3 my-6 rounded font-bold cursor-pointer">
                                    Sign Up
                                </button>
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <p>
                                        <input className="mr-2" type="checkbox" />
                                        Remember me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-8">
                                    <span className="text-gray-600">
                                        Already subscribed to Netflix?
                                    </span>{" "}
                                    <Link to="/login">Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Signup;
