"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  singleProducts: string[];
}

export default function ProductsImages({ singleProducts }: Props) {
  const [currentImage, setCurrentImage] = useState(singleProducts[0]);
  return (
    <div className="flex float-start">
      <div>
        {singleProducts?.map((product, index) => (
          <Image
            onClick={() => setCurrentImage(product)}
            className={`w-24 h-24 object-contain cursor-pointer opacity-80 hover:opacity-100 duration-200 border rounded-sm border-gray-200 mb-1 p-1 ${currentImage === product && "border-gray-500 opacity-100"}`}
            key={index}
            src={product}
            alt="Products image"
            width={200}
            height={200}
            priority
          />
        ))}
      </div>
      <div className="bg-gray-200 ml-5 rounded-md w-full max-w-137.5">
        <Image
          className="w-full h-full object-contain"
          src={currentImage}
          alt="Products image"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
}
