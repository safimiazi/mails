import React from 'react';
import icon from "../../assets/notice/icon.png"
import img1 from "../../assets/Gallery/20200108202404.jpg"
import img2 from "../../assets/Gallery/2.jpg"
import img3 from "../../assets/Gallery/3.jpg"
import img4 from "../../assets/Gallery/4.jpg"
import img5 from "../../assets/Gallery/5.jpg"
import img6 from "../../assets/Gallery/6.jpg"
import img7 from "../../assets/Gallery/7.jpg"
import img8 from "../../assets/Gallery/8.jpg"
import img9 from "../../assets/Gallery/9.jpg"
import img10 from "../../assets/Gallery/10.jpg"
import img11 from "../../assets/Gallery/11.jpg"
import img12 from "../../assets/Gallery/12.jpg"
import img13 from "../../assets/Gallery/13.jpg"
import img14 from "../../assets/Gallery/14.jpg"
import img15 from "../../assets/Gallery/15.jpg"
import img16 from "../../assets/Gallery/16.jpg"
const Gallery = () => {
    return (
        <div className='bg-[#6d685a30] py-20'>
            <div className='max-w-7xl  mx-auto bg-white'>
                <h3 className='text-xl font-semibold text-center pt-10'>Gallery </h3>

                <div className='flex justify-center pb-10'>
                    <img src={icon} alt="" />
                </div>


                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 p-5'>
                    <img src={img1} className='w-full h-full' alt="" />
                    <img src={img2} className='w-full h-full' alt="" />
                    <img src={img3} className='w-full h-full' alt="" />
                    <img src={img4} className='w-full h-full' alt="" />
                    <img src={img5} className='w-full h-full' alt="" />
                    <img src={img6} className='w-full h-full' alt="" />
                    <img src={img7} className='w-full h-full' alt="" />
                    <img src={img8} className='w-full h-full' alt="" />
                    <img src={img9} className='w-full h-full' alt="" />
                    <img src={img10} className='w-full h-full' alt="" />
                    <img src={img11} className='w-full h-full' alt="" />
                    <img src={img12} className='w-full h-full' alt="" />
                    <img src={img13} className='w-full h-full' alt="" />
                    <img src={img14} className='w-full h-full' alt="" />
                    <img src={img15} className='w-full h-full' alt="" />
                    <img src={img16} className='w-full h-full' alt="" />
                </div>





            </div>
        </div>
    );
};

export default Gallery;