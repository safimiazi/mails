import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/HomeProduct/r1.jpg";
import img2 from "../../../assets/HomeProduct/r2.jpg";
import img3 from "../../../assets/HomeProduct/r4.jpg";
import img4 from "../../../assets/HomeProduct/r5.jpg";

const HomeProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
  };

  return (
    <div className="space-y-10 mt-5">
      <div>
        <h4 className="text-2xl text-center">Our <span className="font-semibold">Products!</span></h4>
        <div className="h-1 bg-[#094892] w-36 mt-1 mx-auto"></div>
      </div>

      <Slider className="max-w-7xl mx-auto px-5 text-white" {...settings}>
        <div className="">
          <img src={img1} className="rounded-full border-8 border-white hover:border-gray-700  mx-auto" alt="Image 1" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black">Miniket Rice</h4>
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-8 pl-2  bg-[#0c294ce8] mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>

            </div>          </div>
        </div>
        <div className="">
          <img src={img2} className="rounded-full border-8 border-white hover:border-gray-700  mx-auto" alt="Image 2" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black">Custom Mix Rice</h4>
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-8 pl-2  bg-[#0c294ce8] mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>

            </div>
          </div>
        </div>
        <div className="">
          <img src={img3} className="rounded-full border-8 border-white hover:border-gray-700  mx-auto" alt="Image 3" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black">Chinigura Rice</h4>
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-8 pl-2  bg-[#0c294ce8] mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>

            </div>          </div>
        </div>
        <div className="">
          <img src={img4} className="rounded-full border-8 border-white hover:border-gray-700  mx-auto" alt="Image 4" />
          <div className="text-center">
            <h4 className="text-xl font-bold mt-4 text-black">Kalijira Rice</h4>
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-8 pl-2  bg-[#0c294ce8] mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <button className="py-1 px-2 bg-[#0c294ce8] mt-2">Cart</button>

            </div>          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeProduct;
