"use client";

import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const employeesMock = new Array(15).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
    location: "Mumbai",
    mobile: `99999${10000 + i}`,
    email: `employee${i + 1}@example.com`,
}));

const EmployeeList = () => {
    const [employees, setEmployees] = useState(employeesMock);

    const handleDelete = (id) => {
        const confirmDelete = confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            setEmployees((prev) => prev.filter((emp) => emp.id !== id));
        }
    };

    return (
        <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-30 xl:pb-20 xl:pt-30">
            <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
                <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-transparent to-[#dee7ff47] dark:bg-linear-to-t dark:to-[#252A42]"></div>
                <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
                    <Image
                        src="/images/shape/shape-dotted-light.svg"
                        alt="Dotted"
                        className="dark:hidden"
                        fill
                    />
                    <Image
                        src="/images/shape/shape-dotted-dark.svg"
                        alt="Dotted"
                        className="hidden dark:block"
                        fill
                    />
                </div>

                <div className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
                >
                    <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                        LIST OF EMPLOYEE REGISTRATION
                    </h2>

                    <div className="space-y-5">
                        {employees.slice(0, 10).map((emp) => (
                            <div
                                key={emp.id}
                                className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white dark:bg-black border border-stroke dark:border-strokedark rounded-lg p-5 shadow-sm"
                            >
                                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                                    <div>
                                        <p className="text-lg font-medium text-black dark:text-white">{emp.name}</p>
                                        <p className="text-sm text-body-color dark:text-body-color-dark">{emp.location}</p>
                                    </div>
                                    <div className="sm:ml-10">
                                        <p className="text-sm text-black dark:text-white">{emp.mobile}</p>
                                        <p className="text-sm text-body-color dark:text-body-color-dark">{emp.email}</p>
                                    </div>
                                </div>

                                <div className="mt-4 sm:mt-0">
                                    <button
                                        onClick={() => handleDelete(emp.id)}
                                        className="text-red-500 hover:text-red-700 transition"
                                        title="Delete"
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Static Pagination */}
                    <div className="flex justify-center mt-10 p-4">
                        <div className="flex gap-2">
                            <button className="px-4 py-2 border border-stroke dark:border-strokedark rounded text-sm hover:bg-primary hover:text-white transition">
                                1
                            </button>
                            <button className="px-4 py-2 border border-stroke dark:border-strokedark rounded text-sm hover:bg-primary hover:text-white transition">
                                2
                            </button>
                            <button className="px-4 py-2 border border-stroke dark:border-strokedark rounded text-sm hover:bg-primary hover:text-white transition">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmployeeList;
