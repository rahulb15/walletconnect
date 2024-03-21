import React from "react";
import Contact from "@/src/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kryptomerch Support",
  description: "This is Support page of Kryptomerch",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
