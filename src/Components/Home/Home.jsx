const Home = () => {
  const bloodGroup = ["A +", "A -", "B +", "B -", "AB +", "AB -", "O +", "O -"];

  return (
    <div className="container mx-auto">
      <div className="p-8 rounded-3xl mt-10 shadow-2xl bg-white">
        <h1 className="text-center py-8 text-3xl font-bold text-[#1B2247]">
          Enter your Information Here
        </h1>
        <div className="text-center w-3/4 mx-auto">
          <form>
            <div className="grid grid-cols-2 gap-10 mb-4">
              <input
                type="text"
                name="username"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-10 mb-4">
              <input
                type="number"
                name="phonenumber"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="weight"
                placeholder="Enter your Weight"
                className="input input-bordered w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-10 mb-4">
              <input
                type="number"
                name="height"
                placeholder="Enter your Height"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="age"
                placeholder="Enter your age 18 - 50"
                className="input input-bordered w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-10 mb-4">
              <select name="gender" className="select select-bordered w-full">
                <option disabled selected>
                  Gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Third Gender</option>
              </select>
              <select
                name="bloodgroup"
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Blood Group
                </option>
                {bloodGroup.map((ele, idx) => (
                  <option key={idx}>{ele}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-10 mb-4">
              <input
                type="date"
                name="dateofbirth"
                placeholder="Enter your Date of birth"
                className="input input-bordered w-full"
              />
              <textarea
                className="textarea textarea-bordered w-full resize-none h-5"
                placeholder="Enter your address"
              ></textarea>
            </div>
            <div className="flex items-center justify-center py-3">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
              />{" "}
              <span className="ms-5">Agree with our term & condition</span>
            </div>
            <div>
              <button className="btn w-1/2 text-white mt-5 btn-primary">
                Submit your Blood Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
