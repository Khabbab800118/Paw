import React, { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";

const PopularService = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="font-black text-3xl text-center mt-10  bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        Popular Winter Care Services
      </h3>
      <div className="grid mt-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((data) => (
          <PopularServiceCard
            key={data.serviceId}
            data={data}
          ></PopularServiceCard>
        ))}
      </div>
    </div>
  );
};

export default PopularService;
