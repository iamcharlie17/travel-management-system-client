import { FaStar } from "react-icons/fa6";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Review = ({ review }) => {
  const { name, image, review_details, company, designation } = review;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16  bg-white rounded-lg">
      <div
        className="w-full h-96 bg-cover bg-no-repeat border-2"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="flex items-center">
        <div className=" space-y-4 md:space-y-8 p-4 ">
          <div className="flex">
            <FaStar size={30} className="text-yellow-500" />
            <FaStar size={30} className="text-yellow-500" />
            <FaStar size={30} className="text-yellow-500" />
            <FaStar size={30} className="text-yellow-500" />
            <FaStar size={30} className="text-yellow-500" />
          </div>
          <div className="">
            <FaQuoteLeft color="gray" />
            <p className="px-4">{review_details}</p>
            <div className="flex justify-end">
              <FaQuoteRight color="gray" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-black">{name}</h1>
            <h2 className="text-red-700 font-semibold">
              {designation}, {company}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;