import React from 'react';
import icon from "../../assets/notice/icon.png"
import img1 from "../../assets/notice/Paddy-Husker-Machine.jpg"
import img2 from "../../assets/notice/MNMS-SERIES-double-rice-whitener.jpg"
import img3 from "../../assets/notice/Rice-Color-Sorter-Machine-Hot-Sale-in-Nigeria.jpg"

const Notice = () => {


    const paddyHuskerMachine = [
        {
            name: "Condition",
            content: "New"
        },
        {
            name: "Brand Name",
            content: "Awisy"
        },
        {
            name: "Voltage",
            content: "220v/380v"
        },
        {
            name: "Weight",
            content: "800kg"
        },
        {
            name: "Certification",
            content: "CE ISO"
        },
        {
            name: "Type",
            content: "MLGT-36"
        },
        {
            name: "Power(kw)",
            content: "7.5"
        },
        {
            name: "Name",
            content: "Paddy Husker Machine"
        },
    ];


    const Machine = [
        {
            name: "Place of Origin",
            content: "India, China"
        },
        {
            name: "Production Capacity",
            content: "4-5t/h"
        },
        {
            name: "Power(W)",
            content: "7.5kw"
        },
        {
            name: "Dimension(L*W*H)",
            content: "1400*1268*2200mm"
        },
        {
            name: "Warranty",
            content: "With 24 months"
        },
        {
            name: "Capacity (t/h)",
            content: "4-5"
        },
        {
            name: "After-sales Service Provided",
            content: "Engineers available to service machinery overseas"
        }
    ];


    const doubleLeft = [
        {
            name: "Condition",
            content: "New"
        },
        {
            name: "Brand Name",
            content: "TongFu"
        },
        {
            name: "Production Capacity",
            content: "5-6 T/H"
        },
        {
            name: "Power(W)",
            content: "45+3"
        },
        {
            name: "Certification",
            content: "ISO9001"
        },
        {
            name: "Color",
            content: "Green and White"
        },
        {
            name: "Name",
            content: "MNMS SERIES double rice whitener for rice mill"
        }
    ];


    const doubleRight = [
        { name: "Place of Origin", content: "India, China" },
        { name: "Model Number", content: "MNMS18*2" },
        { name: "Voltage", content: "380V" },
        { name: "Dimension(L*W*H)", content: "2020*980*2000" },
        { name: "Warranty", content: "1 Year" },
        { name: "Air Volume", content: "2800-3500" },
        {
            name: "After-sales Service Provided",
            content: "Engineers available to service machinery overseas"
        }
    ];

    const riceColorSorterMachineLeft = [
        {
            name: "Condition",
            content: "New"
        },
        {
            name: "Brand Name",
            content: "Win Tone"
        },
        {
            name: "Capacity",
            content: "3-8 T/H"
        },
        {
            name: "Power(W)",
            content: "2.4kw, 3"
        },
        {
            name: "Dimension(L*W*H)",
            content: "1850*1460*1960mm"
        },
        {
            name: "Type",
            content: "Rice Processing Equipment"
        },
        {
            name: "Final Products",
            content: "Rice"
        },
        {
            name: "Usage",
            content: "Home use, factory, farm"
        },
        {
            name: "Warranty",
            content: "1 Year"
        },
        {
            name: "Name",
            content: "Rice Color Sorter Machine Hot Sale in Nigeria"
        }
    ];


    const riceProcessingMachineryRight = [
        { name: "Place of Origin", content: "India, China" },
        { name: "Model Number", content: "6SXZ-256B/C" },
        { name: "Voltage", content: "220V 50Hz" },
        { name: "Weight", content: "800kg" },
        { name: "Certification", content: "ISO9001:2008, CE ISO9001" },
        { name: "Color", content: "Blue, white" },
        { name: "Raw material", content: "Rice, grain" },
        { name: "Application", content: "Rice Retailers, suppliers, exporters" },
        { name: "Function", content: "Rice processing, rice sort" },
        {
            name: "After-sales Service Provided",
            content: "Engineers available to service machinery overseas"
        }
    ];



    return (
        <div className='bg-[#6d685a30] py-20'>
            <div className='max-w-7xl  mx-auto bg-white'>
                <div className='flex justify-center py-10'>
                    <img src={icon} alt="" />
                </div>

                <div className='py-3 px-3 bg-[#0c294c] mb-6'>
                    <p className='text-white'>Supply requirements for Rice Mills. Proposal required from buyers / suppliers</p>
                </div>


                {/* section 1 */}
                <div>
                    <h3 className='text-3xl font-semibold text-center'>Paddy Husker Machine</h3>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10 px-4 mt-4'>
                        <figure>
                            <img src={img1} className='w-full' alt="" />
                        </figure>
                        <div>
                            {
                                paddyHuskerMachine.map((data) => <>
                                    <div className='flex justify-start items-center gap-6 '>
                                        <p className='font-semibold text-[#6f42c1]'>{data.name}</p>
                                        <p className='font-semibold'>:</p>
                                        <p className='font-semibold border-b-2 border-r-2 w-full  p-2'>{data.content}</p>
                                    </div>
                                </>)
                            }

                        </div>
                        <div>
                            {
                                Machine.map((data) => <>
                                    <div className='flex justify-start items-center gap-6 '>
                                        <p className='font-semibold text-[#6f42c1]'>{data.name}</p>
                                        <p className='font-semibold'>:</p>
                                        <p className='font-semibold border-b-2 border-r-2 w-full  p-2'>{data.content}</p>
                                    </div>
                                </>)
                            }

                        </div>
                    </div>
                    <div className='h-1 w-full bg-[#0c294c] mt-20'>

                    </div>
                </div>



                {/* section 2 */}
                <div>
                    <h3 className='text-3xl font-semibold text-center mt-8'>MNMS SERIES double rice whitener</h3>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10 px-4 mt-4'>
                        <figure>
                            <img src={img2} className='w-full' alt="" />
                        </figure>
                        <div>
                            {
                                doubleLeft.map((data) => <>
                                    <div className='flex justify-start items-center gap-6 '>
                                        <p className='font-semibold text-[#6f42c1]'>{data.name}</p>
                                        <p className='font-semibold'>:</p>
                                        <p className='font-semibold border-b-2 border-r-2 w-full  p-2'>{data.content}</p>
                                    </div>
                                </>)
                            }

                        </div>
                        <div>
                            {
                                doubleRight.map((data) => <>
                                    <div className='flex justify-start items-center gap-6 '>
                                        <p className='font-semibold text-[#6f42c1]'>{data.name}</p>
                                        <p className='font-semibold'>:</p>
                                        <p className='font-semibold border-b-2 border-r-2 w-full  p-2'>{data.content}</p>
                                    </div>
                                </>)
                            }

                        </div>
                    </div>
                    <div className='h-1 w-full bg-[#0c294c] mt-20'>

                    </div>
                </div>

                {/* section 3 */}
                <div className='pb-8'>
                    <h3 className='text-3xl font-semibold text-center mt-8'>Rice Color Sorter Machine Hot Sale in Nigeria</h3>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10 px-4 mt-4'>
                        <figure>
                            <img src={img3} className='w-full' alt="" />
                        </figure>
                        <div>
                            {
                                riceColorSorterMachineLeft.map((data) => <>
                                    <div className='flex justify-start items-center gap-6 '>
                                        <p className='font-semibold text-[#6f42c1]'>{data.name}</p>
                                        <p className='font-semibold'>:</p>
                                        <p className='font-semibold border-b-2 border-r-2 w-full  p-2'>{data.content}</p>
                                    </div>
                                </>)
                            }

                        </div>
                        <div>
                            {
                                riceProcessingMachineryRight.map((data) => <>
                                    <div className='flex justify-start items-center gap-6 '>
                                        <p className='font-semibold text-[#6f42c1]'>{data.name}</p>
                                        <p className='font-semibold'>:</p>
                                        <p className='font-semibold border-b-2 border-r-2 w-full  p-2'>{data.content}</p>
                                    </div>
                                </>)
                            }

                        </div>
                    </div>

                </div>






            </div>
        </div>
    );
};

export default Notice;