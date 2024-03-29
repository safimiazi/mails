import img1 from "../../../assets/Communication/1.jpg";
import img2 from "../../../assets/Communication/2.jpg";
import img3 from "../../../assets/Communication/3.jpg";
const Communication = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-32 mb-32 px-4">
        <div>
          <h4 className="text-center text-2xl">For Communication !!</h4>
          <div className="h-1 bg-[#094892] w-32 mt-1 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
          <div className="card rounded-none">
            <figure>
              <img src={img1} className="w-full h-56" alt="Shoes" />
            </figure>
            <div className="mt-5">
              <p>
              <span className="text-blue-500">
              Murshidul Alam (Operation Manager) 
                </span>{" "}
                Mr.Murshidul Alam is directly
                involved in the direct management of this organization. The
                long-term experience and professionalism of this person improves
                the order of the organization valuable supportive stability.
              </p>
              <button className="w-full py-2 rounded-full mt-10 text-bold text-2xl text-white bg-[#094892]">
                Call +8801733138179
              </button>
            </div>
          </div>
          <div className="card rounded-none">
            <figure>
              <img src={img2} className="w-full h-56" alt="Shoes" />
            </figure>
            <div className="mt-5">
              <p>
                <span className="text-blue-500">
                Mr. Kamruzzaman ( Manager)
                </span>{" "}
                Mr. Zaman oversees the accounting and management of this organization. This person has been carrying out his duties with his professional attitude from the very beginning of this organization.
              </p>
              <button className="w-full py-2 rounded-full text-bold text-2xl text-white mt-10 bg-[#094892]">
                Call +8801718626634
              </button>
            </div>
          </div>
          <div className="card rounded-none">
            <figure>
              <img src={img3} className="w-full h-56" alt="Shoes" />
            </figure>
            <div className="mt-5">
              <p>
                <span className="text-blue-500">
                  S.M.Rafaet Hossain Rafu (Mandate)
                </span>{" "}
                Mr. Rafu is Graduate in Computer Science. All the activities of
                this organization are managed by his direction. His wisdom and
                intellectual strength gave the organization the latest and
                digital image.
              </p>
              <button className="w-full py-2 rounded-full text-bold text-2xl text-white mt-10 bg-[#094892]">
                Call +8801712552009
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
