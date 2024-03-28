import React, { useState } from "react";

const HomeService = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      title: "CASE-STUDIES.png PADDY FREE CLEANING",
      content:
        "We have paddy free cleaning machines. For an hour each machine can separate quintals of grains in terms of their quality.",
    },
    {
      title: "SOAKING PROCESS",
      content:
        "We have large tanks for soaking process. The grains are soaked meticulously and then dried thoroughly. Each tank is of the following dimension to ascertain the quality of the process:        ",
    },
    {
      title: " BOILER",
      content:
        "After 10 percent moisture is reduced the grains are put into the boiler. The boiler is heated using steam and the grains are made to reduce the moisture. After 10 minutes of boiling, the grains are spread out in a dry place.        ",
    },
    {
      title: " DRYING PROCESS",
      content:
        "The grains are made to dry under direct sunlight for at least three hours. Then the moisture free grains are taken to paddy dryer.        ",
    },
    {
      title: " HULLING",
      content:
        'Paddy is converted to Rice. It cleans the paddy and converts into quality rice. It is used for silky polishing. We are having "SATAKE" make machines for this process.        ',
    },
    {
      title: " PADDY DRYER",
      content: "The paddy dryer removes the moisture of the paddy        ",
    },
    {
      title: " COLOR SORTER",
      content:
        "Color sorters are imported from Korea. Color sorter sorts impurities, paddy, colored-rice, and stone from white rice.        ",
    },
    {
      title: " PACKING",
      content: "We have Rice Packing Machines for packing of our brands. ",
    },
  ];

  const dataArray = [
    "Our traditional and modern work experience and specialized technical advantages of Raipur Auto Rice creates the Unsurpassed Rice Quality.",
    "Raipur Auto Rice is located in Dinajpur (the country of rice). As a result, we are committed to managing the supply of goods in every part of the country.",
    "Our modern automation technology ensures that your orders arrive as specified on time, every time.",
    "We give full assurance of the quality of rice according to your needs or compromise. We provide full assurance of production and delivery as per customer's demand.",
    "Raipur Auto Rice guarantees you a fully equipped raf rice grading scale house to ensure the top quality of the rice products.",
    "Considering the satisfaction of the customer's expectation, we are always aware of product quality standards starting from the tenure of the commodity. The proficiency and ability of our staff to gain knowledge and expertise in quality control ensure the availability of your desired product.",
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 grid-cols-1">
        <div>
          <h4 className="text-center text-2xl">Our Service</h4>
          <div className="h-1 bg-[#094892] w-32 mt-1 mx-auto"></div>
          <div className="w-full  mt-20">
            {items.map((item, index) => (
              <div key={index} className="accordion-item border-b">
                <div
                  className={`accordion-title text-xl py-1 ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {item.title}
                </div>
                {index === activeIndex && (
                  <div className="accordion-content mb-10 mt-2">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-center text-2xl">Why With Us</h4>
          <div className="h-1 bg-[#094892] w-40 mt-1 mx-auto"></div>
          <div className="p-5 mt-20 bg-[#ededed]">
            <div className="p-5">
              <ul className="space-y-2">
                {dataArray.map((data, inx) => (
                  <li className="list-disc" key={inx}>
                    ${data}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
