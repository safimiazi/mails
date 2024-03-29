import React from 'react';
import icon from "../../assets/notice/icon.png"
import photo from "../../assets/About/basmati.jpg"
import certifications from "../../assets/About/no-image-found.jpg"

const About = () => {
    const businessInformation = [
        { name: "Nature of Business", content: "Manufacturer, Processor & Supplier" },
        { name: "Year of Establishment", content: "2002" },
        { name: "Products", content: "Puffed rice and Parboiled rice" },
        { name: "Factory Address", content: "Kauga Road, Shimultola, Dinajpur 5200, Rangpur, Bangladesh." },
        { name: "Production Line", content: "02 (Automatic)" },
        { name: "Production Capacity", content: "5,000 Metric Tons Monthly" },
        { name: "No. of Warehouse", content: "05" },
        { name: "Warehouse Capacity", content: "25,000 Metric Tons" },
        { name: "Ownership Type", content: "Proprietorship" }
    ];


    const additionalDetails = [
        {
            name: "Payment Condition",
            content: "20% Advance & balance against documents. Dependent on agreement."
        },
        {
            name: "Loading Condition",
            content: "Truckload. Dependent on agreement."
        },
        {
            name: "Delivery Condition",
            content: "Dependent on agreement."
        }
    ];


    return (
        <div className='bg-[#6d685a30] py-20 '>
            <div className='max-w-7xl  mx-auto bg-white'>
                <h3 className='text-xl font-semibold text-center pt-10'>About </h3>

                <div className='flex justify-center pb-10'>
                    <img src={icon} alt="" />
                </div>


                <div className='grid md:grid-cols-2 grid-cols-1 gap-5 p-5'>
                    <div>
                        <p>
                            <span className='font-semibold'>Raipur Auto Rice Mills</span> also known as Haque saheb's mill is a renowned manufacturer & supplier of Puffed rice and Parboiled rice in Bangladesh. Established in the year 2002 and located at Kawga, Thana-Kotwali, District-Dinajpur. We are engaged in milling, processing & supply of finest qualities of Puffed rice and parboiled rice.

                            Basmati Rice Manufacturers in RaipurAutoRiceMills
                            We have a well-equipped hygienic rice mill with a final production capacity of 200 MT per day/ 5000 MT per month from 02 automatic production units. The units are equipped with advanced processing, quality control, packaging and warehousing units which work in close co-ordination to cater the rising needs of our clients across the country.
                            <br />
                            We also have excellent 25,000 MT storage facilities. which allow us to stock rice in high quantities & under hygienic conditions which further helps us in the timely delivery of consignments. Aiming at client satisfaction and guaranteeing the finest quality in every grain, we undertake stringent quality checks and ensure they meet the international standards.
                            <br />
                            We supply rice through out the country according to customer's demand and contract. Our rice is widely appreciated by the high quality, fresh, refreshing and untimely blessing from nature which is universally acclaimed. Above all, its delicate aroma and rich flavor makes the taste of your food.
                        </p>
                    </div>
                    <div>
                        <img src={photo} className='w-full' alt="" />
                    </div>
                </div>

                {/* table section 1 */}

                <div>
                    <h3 className='text-xl pt-20 px-5'>Basic <span className='font-semibold'>Information</span></h3>
                    <div className='p-5'>
                        {
                            businessInformation.map((data) => <>
                                <div className='grid grid-cols-3 items-center border-b-2 border-r-2'>
                                    <div className='col-span-1  border-r-2 p-3'>
                                        <p className="">{data.name}</p>
                                    </div>
                                    <div className='col-span-2 p-1'>
                                        <p className="">{data.content}</p>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                </div>



                <div>
                    <h3 className='text-xl pt-20 px-5 font-semibold'>Payment, Loading & Delivery Conditions</h3>
                    <div className='p-5'>
                        {
                            additionalDetails.map((data) => <>
                                <div className='grid grid-cols-3 items-center border-b-2 border-r-2'>
                                    <div className='col-span-1  border-r-2 p-3'>
                                        <p className="">{data.name}</p>
                                    </div>
                                    <div className='col-span-2 p-1'>
                                        <p className="">{data.content}</p>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                </div>


                <div>
                    <div>
                    <h3 className='text-xl pt-20 px-5 text-center'>Our <span className='font-semibold'>Certifications</span></h3>

                    </div>
                    <div className='grid md:grid-cols-5 gap-10 justify-between grid-cols-1 p-5'>
                        <img src={certifications} className='w-full' alt="" />
                        <img src={certifications} className='w-full' alt="" />
                        <img src={certifications} className='w-full' alt="" />
                        <img src={certifications} className='w-full' alt="" />
                        <img src={certifications} className='w-full' alt="" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;