"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Post = () => {
    const [jobData, setJobData] = useState({
        companyName: "",
        jobTitle: "",
        location: "",
        workType: "Remote",
        jobType: "Full-Time",
        salary: "",
        skills: "",
        moreInfo: "",
        logo: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "logo") {
            setJobData({ ...jobData, logo: files[0] });
        } else {
            setJobData({ ...jobData, [name]: value });
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

                <div

                    className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
                >
                    <h2 className="mb-15 text-center font-semibold text-black dark:text-white xl:text-sectiontitle2">
                        ADD NEW JOB
                    </h2>

                    <form>
                        {/* Company Name & Logo */}
                        <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:gap-14">
                            <input
                                name="companyName"
                                type="text"
                                placeholder="Company Name"
                                value={jobData.companyName}
                                onChange={handleChange}
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee"
                            />
                            <input
                                name="logo"
                                type="file"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full border-b border-stroke pb-3.5 dark:border-strokedark"
                            />
                        </div>

                        {/* Job Title & Location */}
                        <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:gap-14">
                            <input
                                name="jobTitle"
                                type="text"
                                placeholder="Job Title"
                                value={jobData.jobTitle}
                                onChange={handleChange}
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee"
                            />
                            <input
                                name="location"
                                type="text"
                                placeholder="Location"
                                value={jobData.location}
                                onChange={handleChange}
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee"
                            />
                        </div>

                        {/* Work Type & Job Type */}
                        <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:gap-14">
                            <select
                                name="workType"
                                value={jobData.workType}
                                onChange={handleChange}
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo dark:border-strokedark dark:focus:border-manatee"
                            >
                                <option value="Remote">Remote</option>
                                <option value="Onsite">Onsite</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>

                            <select
                                name="jobType"
                                value={jobData.jobType}
                                onChange={handleChange}
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo dark:border-strokedark dark:focus:border-manatee"
                            >
                                <option value="Full-Time">Full Time</option>
                                <option value="Part-Time">Part Time</option>
                            </select>
                        </div>

                        {/* Salary & Skills */}
                        <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:gap-14">
                            <input
                                name="salary"
                                type="text"
                                placeholder="Salary"
                                value={jobData.salary}
                                onChange={handleChange}
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee"
                            />
                            <input
                                name="skills"
                                type="text"
                                placeholder="Skills Required (comma separated)"
                                value={jobData.skills}
                                onChange={handleChange}
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee"
                            />
                        </div>

                        {/* More Information */}
                        <div className="mb-10">
                            <textarea
                                name="moreInfo"
                                rows={4}
                                placeholder="More Information about the job..."
                                value={jobData.moreInfo}
                                onChange={handleChange}
                                className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center p-5">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                            >
                                Post Job
                                <svg
                                    className="fill-white"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Post;
