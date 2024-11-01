import axios from "axios";
import { UUID } from "crypto";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export type DataResponseServiceModel = {
    fullName: string;
    id: UUID
    documentation: string;
    mobileAccessControl: string;
    panelAdminDesc: string;
    helpWithIntegration: string;
    pricingCurrency: string;
    pricingMin: number;
    emergency: string;
}

export const ServiceCard = () => {
    const [data, setData] = useState<DataResponseServiceModel[]>()

    const selectedPath = useParams()
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:5001/api/${selectedPath.plan}`)
            setData(data)
        }
        fetchData()
    }, [selectedPath])


    return (
        <section className='flex flex-col items-center gap-6 lg:justify-evenly lg:flex-row p-5'>
            {data?.map((data) => (
                <React.Fragment key={data.id}>
                    <div className="w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-[#8F6CFF] sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 ">{data.fullName}</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white gap-6 font-bold">Od
                            <span className="text-3xl font-extrabold tracking-tight">{data?.pricingMin + " "}
                                <span className="text-2xl font-semibold">{data?.pricingCurrency}</span>
                            </span>
                        </div>
                        <ul role="list" className="space-y-5 my-7">
                            <li className="flex items-center self-center">
                                <svg className="flex-shrink-0 w-4 h-4 text-[#6F43FC] dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-600 dark:text-gray-400 ms-3">{data.documentation}</span>
                            </li>
                            <li className="flex items-center self-center">
                                <svg className="flex-shrink-0 w-4 h-4 text-[#6F43FC] dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">{data.helpWithIntegration}</span>
                            </li>
                            <li className="flex items-center self-center">
                                <svg className="flex-shrink-0 w-4 h-4 text-[#6F43FC] dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">{data.mobileAccessControl}</span>
                            </li>
                            <li className="flex items-center self-center">
                                <svg className="flex-shrink-0 w-4 h-4 text-[#6F43FC] dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">{data.panelAdminDesc}</span>
                            </li>
                            <li className="flex items-center self-center">
                                <svg className="flex-shrink-0 w-4 h-4 text-[#6F43FC] dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">{data.emergency}</span>
                            </li>
                        </ul>
                        <button type="button" className="text-white bg-[#8F6CFF] hover:bg-[#6F43FC] focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Skontaktuj Sie</button>
                    </div>
                </React.Fragment>
            ))}

        </section>
    )
}