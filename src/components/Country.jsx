import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Country = ({ country }) => {
  const { imageUrl, countryName, shortDescription } = country;
  return (
    <Link to={`/all-tourist-spots/${countryName}`}>
      <Fade duration={1000} triggerOnce direction="up">
        <div className="border-2 rounded-lg p-4 space-y-2 shadow-lg">
          <div
            className="h-60 bg-cover"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">{countryName}</h1>
              <p>{shortDescription}</p>
            </div>
          </div>
        </div>
      </Fade>
    </Link>
  );
};

export default Country;
