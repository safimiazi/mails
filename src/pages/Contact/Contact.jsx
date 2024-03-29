import React from 'react';
import icon from "../../assets/notice/icon.png"
import photo from "../../assets/About/basmati.jpg"
import certifications from "../../assets/About/no-image-found.jpg"

const Contact = () => {



    return (
        <div className='bg-[#6d685a30] py-20 '>
            <div className='max-w-7xl  mx-auto bg-white p-5'>
                <h3 className='text-xl font-semibold text-center pt-10'>Contact Us </h3>

                <div className='flex justify-center pb-10'>
                    <img src={icon} alt="" />
                </div>


                <div>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47029.47447554039!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDUyJzU5LjgiTiA3OMKwMjUnMzQuMCJF!5e0!3m2!1sen!2sus!4v1619569245969!5m2!1sen!2sus"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div className='border-b-2 my-10'>

                </div>

                <div>
                   <div className='mb-2'>
                   <label htmlFor="">
                       <span>Name</span><span className='text-red-600'>*</span>
                    </label>
                    <input type="text" className='py-1 px-3 border  border-gray-500 md:w-1/3 ml-8 focus:outline-none focus:border-gray-500 bg-[#d9dada]' />
                   </div>
                   <div className='mb-2'>
                   <label htmlFor="">
                       <span>Email</span><span className='text-red-600'>*</span>
                    </label>
                    <input type="text" className='py-1 px-3 border  border-gray-500 md:w-1/3 ml-9 focus:outline-none focus:border-gray-500 bg-[#d9dada]' />
                   </div>
                   <div className='mb-2'>
                   <label htmlFor="">
                       <span>Phone</span><span className='text-red-600'>*</span>
                    </label>
                    <input type="text" className='py-1 px-3 border  border-gray-500 md:w-1/3 ml-7 focus:outline-none focus:border-gray-500 bg-[#d9dada]' />
                   </div>
                   <div className='mb-2'>
                   <label htmlFor="">
                       <span>Message </span><span className='text-red-600'>*</span>
                    </label>
                    <textarea type="" className='py-1 px-3 border  border-gray-500 md:w-1/3 ml-2 focus:outline-none focus:border-gray-500 bg-[#d9dada]' />
                   </div>
                   <div>
                    <button className='py-2 px-3 hover:text-white border-2 hover:bg-indigo-800 md:ml-20'>Send Message</button>
                   </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;