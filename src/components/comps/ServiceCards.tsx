import axios from "axios";
import { UUID } from "crypto";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export type DataResponseServiceModel = {
    id: UUID;
    type: string;
    fullName: string;
    plan: string;
    pricingMin: number;
    pricingCurrency: string;
    fullyCustomizable: boolean;
    helpWithIntegration: string;
    documentation: string;
    emergencySupport: string;
    description?: string;
    keyFeatures?: string[];
    responseTimeInHours?: number;
    isAvailable24x7: boolean;
};

export const ServiceCard = () => {
    const [dataService, setData] = useState<DataResponseServiceModel[] | null>(null);
    const { plan } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get<DataResponseServiceModel[]>(`https://localhost:7216/api/${plan}`);
                const sortedData = data.sort((a, b) => a.pricingMin - b.pricingMin);
                setData(sortedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [plan]);

    if (!dataService) {
        return <div>Loading...</div>;
    }

    return (
        <section className="flex flex-col gap-6 lg:justify-evenly lg:flex-row p-5">
            {dataService?.map((data) => (
                <div
                    key={data.id}
                    className="flex flex-col self-center w-full max-sm:max-w-sm lg:max-w-sm max-w-lg bg-white border border-gray-200 rounded-lg hover:shadow-custom duration-1000 pt-3 pr-3 pl-3 pb-3 dark:bg-gray-800 dark:border-gray-700"
                    style={{ height: 450 }}
                >
                    <h5 className="text-xl font-semibold mb-2">{data.fullName}</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white gap-6 font-bold">
                        Od
                        <span className="text-3xl font-extrabold tracking-tight">
                            {data?.pricingMin + " "}
                            <span className="text-2xl font-semibold">{data?.pricingCurrency}</span>
                        </span>
                    </div>
                    <ul role="list" className="space-y-3 max-lg:space-y-5 my-7 h-full text-start">
                        <li className="flex items-center self-center">
                            <svg
                                className="flex-shrink-0 w-4 h-4 text-[#6F43FC] dark:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-600 dark:text-gray-400 ms-3">{data.documentation}</span>
                        </li>
                        <li className="flex items-center self-center">
                            <svg
                                className="flex-shrink-0 w-4 h-4 text-[#6F43FC] dark:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">{data.helpWithIntegration}</span>
                        </li>
                        <li className="flex items-center self-center">
                            <svg
                                className="flex-shrink-0 w-4 h-4 text-[#6F43FC] dark:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">Personalizowane: {data.fullyCustomizable ? "Tak" : "Nie"}</span>
                        </li>
                        <li className="flex items-center self-center">
                            <svg
                                className="flex-shrink-0 w-4 h-4 text-[#6F43FC] dark:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">{data.emergencySupport}</span>
                        </li>
                        <li className="flex items-center self-center">
                            <svg
                                className="flex-shrink-0 w-4 h-4 text-[#6F43FC] dark:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">{data.description}</span>
                        </li>
                        <li className="flex items-center self-center">
                            <svg
                                className="flex-shrink-0 w-4 h-4 text-[#6F43FC] dark:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                {data.keyFeatures && data.keyFeatures.length > 0 && (
                                    <span className="flex items-center self-center ms-3">
                                        {data.keyFeatures.join(", ")}
                                    </span>
                                )}
                            </span>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="text-white bg-[#8F6CFF] hover:bg-[#6F43FC] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                    >
                        Skontaktuj Sie
                    </button>
                </div>
            ))}
        </section>
    );
};
