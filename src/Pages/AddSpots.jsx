import Swal from "sweetalert2";



const AddSpots = () => {
  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const email = form.email.value;
    const touristSpotName = form.touristSpotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const shortDescription = form.shortDescription.value;
    const averageCost = form.averageCost.value;
    const season = form.season.value;
    const travelTime = form.travelTime.value;
    const visitorsPerYear = form.visitorsPerYear.value;
    const imageUrl = form.imageUrl.value;

    const touristSpotInfo = {
      userName,
      email,
      touristSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      season,
      travelTime,
      visitorsPerYear,
      imageUrl,
    };
    console.log(touristSpotInfo);

    fetch('http://localhost:3000/all-tourist-spots', {
        method: "POST", 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(touristSpotInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: "Good job!",
                text: "You added tourist spot on database",
                icon: "success"
              });
        }
    })

    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-2 pt-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Add Tourist Spots</h1>
      </div>

      <form
        onSubmit={handleAddSpot}
        className="md:grid  md:grid-cols-2 gap-4 w-full md:w-2/3  p-8 shadow-xl mx-auto bg-white rounded-xl"
      >
        <div>
          <label htmlFor="name">Your Name</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="name"
            placeholder="Enter your name"
            id=""
          />
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="email"
            name="email"
            placeholder="Enter your Email"
            id=""
          />
        </div>
        <div>
          <label htmlFor="touristSpotName">Tourist spot name</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="touristSpotName"
            placeholder="Enter tourist spot name"
            id=""
          />
        </div>
        <div>
          <label htmlFor="countryName">Country Name</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="countryName"
            placeholder="Enter country name"
            id=""
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="location"
            placeholder="Enter location"
            id=""
          />
        </div>
        <div>
          <label htmlFor="shortDescription">Short description</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="shortDescription"
            placeholder="Enter short description"
            id=""
          />
        </div>
        <div>
          <label htmlFor="averageCost">Average cost</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="averageCost"
            placeholder="Enter average cost"
            id=""
          />
        </div>
        <div>
          <label htmlFor="season">Seasonality</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="season"
            placeholder="Enter season"
            id=""
          />
        </div>
        <div>
          <label htmlFor="travelTime">Travel time</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="travelTime"
            placeholder="Enter travel time in days"
            id=""
          />
        </div>
        <div>
          <label htmlFor="visitorsPerYear">Vistors per year</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="visitorsPerYear"
            placeholder="Enter visitors per year"
            id=""
          />
        </div>
        <div className="col-span-2 w-full">
          <label htmlFor="imageUrl">Image URL</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="imageUrl"
            placeholder="Enter spot's image url"
            id=""
          />
        </div>

        <button className="w-full mt-2 text-center col-span-2 bg-red-700 text-white py-2 font-bold">
          ADD SPOT
        </button>
      </form>
    </div>
  );
};

export default AddSpots;
