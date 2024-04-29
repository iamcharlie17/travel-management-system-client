const AddSpots = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-2 pt-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Add Tourist Spots</h1>
      </div>

      <form className="md:grid  md:grid-cols-2 gap-4 w-full md:w-2/3  p-8 shadow-xl mx-auto bg-white rounded-xl">
        <div>
          <label htmlFor="userName">Your Name</label>
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
          <label htmlFor="userName">Your Email</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="name"
            placeholder="Enter your Email"
            id=""
          />
        </div>
        <div>
          <label htmlFor="userName">Tourist spot name</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="name"
            placeholder="Enter tourist spot name"
            id=""
          />
        </div>
        <div>
          <label htmlFor="userName">Country Name</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="name"
            placeholder="Enter country name"
            id=""
          />
        </div>
        <div>
          <label htmlFor="userName">Location</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="name"
            placeholder="Enter location"
            id=""
          />
        </div>
        <div>
          <label htmlFor="userName">Short description</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="name"
            placeholder="Enter short description"
            id=""
          />
        </div>
        <div>
          <label htmlFor="userName">Average cost</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="name"
            placeholder="Enter average cost"
            id=""
          />
        </div>
        <div>
          <label
            htmlFor="userName"
          >
            Seasonality
          </label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="name"
            placeholder="Enter season"
            id=""
          />
        </div>
        <div>
          <label htmlFor="userName">Travel time</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="name"
            placeholder="Enter travel time in days"
            id=""
          />
        </div>
        <div>
          <label htmlFor="userName">Vistors per year</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="name"
            placeholder="Enter visitors per year"
            id=""
          />
        </div>
        <div className="col-span-2 w-full">
          <label htmlFor="userName">Image URL</label>
          <br />
          <input
            className="w-full px-4 border-2 rounded-l py-1"
            type="text"
            name="name"
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
