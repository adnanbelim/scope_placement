// components/Job/JobItem.tsx

"use client";
import { Job } from "@/types/job";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const jobItem = ({ job }: { job: Job }) => {
  const { title, company, location, salary, type, logo, description, link } =
    job;

  return (
    <div
     
      className="rounded-lg bg-white p-5 shadow-md dark:bg-blacksection"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12">
          <Image src={logo} alt={`${company} logo`} fill className="rounded" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
        </div>
      </div>

      <p className="text-sm mb-3 text-gray-700 dark:text-gray-300 line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
        <span>📍 {location}</span>
        <span>💰 {salary}</span>
        <span>🕒 {type}</span>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <Link
          href={link}
          className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition"
        >
          View Details
        </Link>
        
        <Link
          href="/apply"
          className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition"
        >
          Apply Now
        </Link>
      </div>

    </div>
  );
};

export default jobItem;
