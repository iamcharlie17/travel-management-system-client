import { useEffect, useState } from "react";
import LatestSpot from "./LatestSpot";
import { Link } from "react-router-dom";


const LatestSpots = () => {
    const [spots, setSpots] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/all-tourist-spots')
        .then(res => res.json())
        .then(data => setSpots(data))
    },[])
    // console.log(spots)
    const latestSpots = spots.slice(spots.length-6, spots.length);
    
    return (
        <div className="my-8">
            <div>
                <h1 className="text-center text-4xl font-semibold">Latest Tourist Spots</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-4">
                {
                    latestSpots.map((l)=><LatestSpot latestSpot = {l} key={l._id}/>)
                }
            </div>
            <Link to='/all-tourist-spots' className="flex justify-center">
                <button className="bg-red-700 text-white px-4 py-1 font-semibold hover:scale-105">View All</button>
            </Link>
        </div>
    );
};

export default LatestSpots;