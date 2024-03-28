import React from "react";
import img from "../../../assets/write/Salina-Haque.jpg";

const Write = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-8 mt-10">
      <div>
        <h3 className="text-xl font-semibold">We are for you !!</h3>
        <p>
          Since you’re here, we’re sure you’re in necessity and love about
          Puffed rice and Parboiled rice too. What's not to love about them
          right? Puffed rice and Parboiled rice is the purest uncontaminated
          form of rich on earth. We strive to bring this power pack of
          nutrients to you. At Puffed rice and Parboiled rice, we Raipur Auto
          Rice Mills manufacture some of the best product to ensure you get
          the finest, natural quality straight from us. We put in 8 good years
          in R&D, with assistance from a food science major from university
          food nutritionist. To create a patentable processing method to
          preserve the nutrients in the packs of Puffed rice and Parboiled
          rice that reach you. We are fully automated rice mills in Dinajpur
          which is powered by Rafusoft.
        </p>
      </div>
      <div className="md:flex gap-3">
        <img src={img} className="w-32 h-32 border-4" alt="" />
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold">Hello!!</h4>
          <p>
            I am <span className="font-bold">Mst. Salina Haque</span>, owner of Raipur Auto Rice Mills and one of
            the women entrepreneurs in Dinajpur. It is with great pleasure
            that I welcome you to the Raipur Auto Rice Mills website. Our goal
            is to build a strong business relationship based on belief to
            ensure customer’s reliability and business skills with proper
            attention and find the right ways to meet your needs. We ensure
            you the best quality of Bangladeshi rice is delivered here. I felt
            happy when I serve the people good food. We are using latest
            technologies, machinery within Bangladesh. Really, I recommend
            quality Rice Mill to All. Enjoy our website and feel free to
            contact our office for any additional information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Write;
