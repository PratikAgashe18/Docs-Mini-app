import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { LuDownload } from "react-icons/lu";
import { motion } from "motion/react";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={1.1}
      dragTransition={{bounceStiffness:700,bounceDamping:10}}
      className=" w-60 flex-shrink-0 relative h-72 rounded-[40px] text-white px-5  py-10 overflow-hidden bg-zinc-700"
    >
      <FaRegFileAlt />
      <p className=" text-sm  leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  left-0 w-full">
        <div className="flex  items-center justify-between mb-3 py-3 px-8">
          <h5>{data.filesize}</h5>
          <span className=" w-7  h-7  bg-zinc-600 rounded-full  flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <LuDownload size={"1em"} color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full ${
              data.tag.tagColor == "blue" ? "bg-blue-600" : "bg-green-600"
            } py-4 justify-center items-center flex`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
