import Image from "next/image";
import React from "react";

const Tray = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10 transition-all duration-200">
        <div className="h-fit w-full border-2 border-primary rounded-md shadow-md">
          <Image
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="food"
            width={500}
            height={500}
            className="object-cover rounded-md"
          />
        </div>
        <div className="h-fit w-full border-2 border-primary rounded-md shadow-md">
          <Image
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="food"
            width={500}
            height={500}
            className="object-cover rounded-md"
          />
        </div>
        <div className="h-fit w-full border-2 border-primary rounded-md shadow-md">
          <Image
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="food"
            width={500}
            height={500}
            className="object-cover rounded-md"
          />
        </div>
        <div className="h-fit w-full border-2 border-primary rounded-md shadow-md">
          <Image
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="food"
            width={500}
            height={500}
            className="object-cover rounded-md"
          />
        </div>
        <div className="h-fit w-full border-2 border-primary rounded-md shadow-md">
          <Image
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="food"
            width={500}
            height={500}
            className="object-cover rounded-md"
          />
        </div>
        <div className="h-fit w-full border-2 border-primary rounded-md shadow-md">
          <Image
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="food"
            width={500}
            height={500}
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Tray;
