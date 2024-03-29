import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/HomeProduct/r1.jpg";
import img2 from "../../../assets/HomeProduct/r2.jpg";
import img3 from "../../../assets/HomeProduct/r4.jpg";
import img4 from "../../../assets/HomeProduct/r5.jpg";

const HomeProdect = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="space-y-10 mt-5">
      <div>
        <h4 className="text-2xl text-center ">Our <span className="font-semibold">Products!</span></h4>
        <div className="h-1 bg-[#094892] w-36 mt-1 mx-auto"></div>

      </div>



      <Slider className="max-w-7xl mx-auto px-5 text-white" {...settings}>
        <div className="flex flex-col items-center">
          <img src={img1} className="rounded-full" alt="Image 1" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black">Custom Mix Rice</h4>
            <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={img2} className="rounded-full" alt="Image 1" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black">Custom Mix Rice</h4>
            <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={img3} className="rounded-full" alt="Image 1" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black">Custom Mix Rice</h4>
            <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={img4} className="rounded-full" alt="Image 1" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black" >Custom Mix Rice</h4>
            <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={img3} className="rounded-full" alt="Image 1" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black">Custom Mix Rice</h4>
            <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={img4} className="rounded-full" alt="Image 1" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black">Custom Mix Rice</h4>
            <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={img3} className="rounded-full" alt="Image 1" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black">Custom Mix Rice</h4>
            <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={img4} className="rounded-full" alt="Image 1" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black">Custom Mix Rice</h4>
            <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>
          </div>
        </div>


      </Slider>
    </div>
  );
};

export default HomeProdect;
