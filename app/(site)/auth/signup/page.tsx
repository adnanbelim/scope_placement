import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - Scope Computer Job Consultancy Services",

  // other metadata
  description: "This is Sign Up page for Startup Pro"
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
