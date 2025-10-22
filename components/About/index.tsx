"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden py-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/mobile.webp"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/mobile.webp"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  Get the Apps Now!
                </span>
              </span>
              <p>Download our free Mobile Apps Today Get Ready</p>

              <div className="mt-8 flex items-center gap-5">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-24 w-50 dark:border-strokedark dark:bg-blacksection rounded-lg flex items-center justify-center"
                >
                  <Image
                    src="/images/apple-store.png"
                    alt="Apple Store Icon"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Link>

                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-24 w-50 dark:border-strokedark dark:bg-blacksection rounded-lg flex items-center justify-center"
                >
                  <Image
                    src="/images/play-store.png"
                    alt="Play Store Icon"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
