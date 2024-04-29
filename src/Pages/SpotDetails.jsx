
import { useLoaderData, useParams } from "react-router-dom";


const SpotDetails = () => {
    
    const spots = useLoaderData()
    const id = useParams()

    const spot = spots.find(s => s._id==id.id)
   
    const {
        touristSpotName,
        countryName,
        location,
        shortDescription,
        averageCost,
        season,
        travelTime,
        visitorsPerYear,
        imageUrl,
      } = spot;

    
   

    return (
        <div className="py-16 lg:flex items-center gap-8 min-h-screen">
            <div className="lg:w-1/2">
                <img src={imageUrl} alt="" />
            </div>
            <div className="lg:w-1/2">
                <h1 className="text-2xl font-semibold">{touristSpotName}</h1>
                <p className="mb-8">{shortDescription}</p>
                <h2><span className="font-bold">Country:</span> {countryName}</h2>
                <h2><span className="font-bold">Location:</span> {location}</h2>
                <h2><span className="font-bold">Average Cost:</span> {averageCost}</h2>
                <h2><span className="font-bold">Season:</span> {season}</h2>
                <h2><span className="font-bold">Travel Time:</span> {travelTime} Days</h2>
                <h2><span className="font-bold">Vistors Per Year: </span> {visitorsPerYear}</h2>
            </div>
        </div>
    );
};

export default SpotDetails;