"use client";

import { useState } from "react";
import { TrashIcon, EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import jobData from "@/components/Job/jobData";

const JobList = () => {
  const [jobs, setJobs] = useState(jobData);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this job?")) {
      setJobs((prev) => prev.filter((job) => job._id !== id));
    }
  };

  const handleView = (id: number) => {
    // For now just alert or console log, later can open modal or redirect
    alert(`Show details for job id: ${id}`);
  };

  return (
    <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-30 xl:pb-20 xl:pt-30">
      <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        {/* Background shapes */}
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

        {/* Container */}
        <div className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15">
          <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
            LIST OF JOBS
          </h2>

          <div className="space-y-5">
            {jobs.slice(0, 10).map((job) => (
              <div
                key={job._id}
                className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white dark:bg-black border border-stroke dark:border-strokedark rounded-lg p-5 shadow-sm"
              >
                {/* Left: Logo + Title and Company */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      fill
                      className="object-contain rounded"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-black dark:text-white">
                      {job.title}
                    </p>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Middle: Location, Salary, Type */}
                <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-6 text-sm text-black dark:text-white">
                  <p>{job.location}</p>
                  <p>{job.salary}</p>
                  <p>{job.type}</p>
                </div>

                {/* Actions */}
                <div className="mt-4 sm:mt-0 flex gap-4">
                  <button
                    onClick={() => handleView(job._id)}
                    title="View Details"
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(job._id)}
                    title="Delete Job"
                    className="text-red-500 hover:text-red-700 transition"
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

export default JobList;
