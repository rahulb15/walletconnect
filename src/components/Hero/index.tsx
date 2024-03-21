"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        {/* <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0"> */}
        <div className="mt-12.5 grid grid-rows-1 gap-7.5 md:grid-rows-2 lg:mt-15 lg:grid-rows-3 xl:mt-20 xl:gap-12.5 lg:item-center">
          

          <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center lg:col-span-2 lg:row-span-2 lg:col-start-2"
      >
        <div>
        
        <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
            <span className="banner-text">
              Merchandising 
            </span>
            <br />
            <span className="banner-text1">
              NFT,
            </span>
            <span className="banner-text2">
              Gaming
            </span>
          </h2>
        
        
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">Enter the ever-expanding world of Kryptomerch. Dive into our
            exciting Gaming metaverse. Explore, Buy &amp; Sell the most amazing
            NFTs on our truly decentralized NFT Marketplace &amp; Launchpad
            based on Marmalade Standards. Buy &amp; Sell a wide variety of
            NFT-based Merchandise. Launching soon on Kadena with ZERO gas fees.
            That&apos;s right !</p>
        </div>
        <div className="flex justify-center gap-4 mt-8 lg:mt-10 lg:justify-center lg:gap-6">
          <Link href="/nft-marketplace">
            <button className="btn-lightpaper"
            >Litepaper </button>
          </Link>
          <Link href="/launchpad">
            <button className="btn-launchpad"
            >Launchpad</button>
          </Link>

      </div>
            
      </motion.div>

    
          

          
      </div>

           
        {/* </div> */}
      </section>
    </>
  );
};

export default Hero;
