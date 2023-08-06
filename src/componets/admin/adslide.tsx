import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Sideber = (props: Props) => {
    return (
        <>
            <aside
                id="separator-sidebar"
                className=" flex-auto	  left-0  w-90 h-screen transition-transform -translate-x-full sm:translate-x-0 top-[64px]"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a
                                href="admin/dt"
                                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-200"
                            >
                                <svg
                                    fill="none"
                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                    ></path>
                                </svg>
                             <Link to={`/admin`}><span className="ml-3">Quản lý Product</span></Link>   
                            </a>
                        </li>
                        <li>
                            <a
                                href="admin/laptop"
                                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-200"
                            >
                                <svg
                                    fill="none"
                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                                    ></path>
                                </svg>
                                <Link to={`/admin/category`}><span className="ml-3">Quản lý Category</span></Link>   

                            </a>
                        </li>
                        <li>
                            <a
                                href="admin/maytinh"
                                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-200"
                            >
                                <svg
                                    fill="none"
                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
                                    ></path>
                                </svg>
                                <Link to={`/admin/user`}><span className="ml-3">Quản lý User</span></Link>   

                            </a>
                        </li>

                    
                    </ul>
                </div>
            </aside>
            <div className="p-4 sm:ml-64"></div>
        </>
    );
};

export default Sideber;