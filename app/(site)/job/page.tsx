// app/jobs/page.tsx

import JobData from "@/components/Job/jobData";
import JobItem from "@/components/Job/jobItem";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | Scope Computer Job Consultancy Services",
  description: "Find your next opportunity.",
};

const JobPage = async () => {
  return (
    <section className="pt-20 lg:pt-25 xl:pt-25 pb-10">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">

        {/* Double Search Bar */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center mb-10 w-full">
          <input
            type="text"
            placeholder="City, state, zip code or remote"
            className="w-full sm:w-1/3 border border-gray-300 rounded-none sm:rounded-l-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Job title, keywords or company"
            className="w-full sm:w-1/3 border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md flex items-center justify-center cursor-pointer"
          >
            <MagnifyingGlassIcon className="h-6 w-5" />
          </button>
        </div>

        {/* Job Items Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {JobData.map((job, idx) => (
            <JobItem key={idx} job={job} />
          ))}
        </div>

      </div>
    </section>

  );
};

export default JobPage;
