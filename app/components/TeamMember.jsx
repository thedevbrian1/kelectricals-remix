import { Link } from "@remix-run/react";
import { useState } from "react";

export default function TeamMember() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        // <div className="w-60 lg:w-80 grid grid-rows-3 md:grid-rows-2 bg-gray-100 rounded-lg">
        //     <div className="w-full row-span-1 bg-gradient-to-r from-[#333333] to-[#DD1818] rounded-t-lg" />
        //     <div className="row-span-2 md:row-span-1 flex flex-col items-center">
        //         <div className="w-20 md:w-24 mx-auto -mt-10 md:-mt-14">
        //             <img
        //                 src="/person.png"
        //                 alt=""
        //                 className="w-full h-auto rounded-full"
        //             />
        //         </div>
        //         <p className="font-semibold">William Kihara</p>
        //         <p>CEO</p>
        //         <Link to="/about" className="underline mt-2 md:mt-4 mb-2">
        //             View details
        //         </Link>
        //     </div>
        // </div>

        <div className="w-full max-w-sm bg-white border border-slate-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 min-h-[200px]">
            {isFlipped
                ? (<div className="h-full p-8">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white font-heading">Qualifications</h3>
                    <ul className="text-black-olive mt-2 text-left text-sm lg:text-base font-body">
                        <li>Higher Diploma in Electrical/Electronics Engineering</li>
                        <li>Higher Diploma in Electrical/Electronics Engineering</li>
                        <li>Higher Diploma in Electrical/Electronics Engineering</li>
                    </ul>
                    <button
                        onClick={() => setIsFlipped(false)}
                        className="border border-slate-300 px-4 py-2 rounded font-body text-gray-500 hover:text-black hover:border-slate-700 transition ease-in-out duration-300 mt-4"
                    >
                        Back
                    </button>
                </div>)
                : (<div className="flex flex-col items-center justify-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full  mt-8" src="/person.png" alt="Bonnie image" />
                    <h3 className="mb-1 text-xl font-medium font-heading text-gray-900 dark:text-white">William Kihara</h3>
                    <span className="text-sm font-body text-gray-500 dark:text-gray-400 font-semibold">CEO</span>
                    <div className="flex mt-4  md:mt-6">
                        {/* <Link to="/about" className="underline text-gray-500 hover:text-gray-700 ">
                    View details
                </Link> */}
                        <button
                            type="button"
                            onClick={() => setIsFlipped(true)}
                            className="border border-slate-300 px-4 py-2 rounded text-gray-500 font-body hover:text-black hover:border-slate-700 transition ease-in-out duration-300"
                        >
                            View details
                        </button>
                    </div>
                </div>)
            }



        </div>
    );
}



<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>

