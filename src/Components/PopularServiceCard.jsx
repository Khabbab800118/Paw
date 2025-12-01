import React from "react";

const PopularServiceCard = ({ data }) => {

  return (
    <div className="mt-5 mx-auto">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={data.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{data.serviceName}</h2>
          <div className="flex justify-between">
            <h4 className="btn btn-accent w-fit font-black text-lg">
              {data.rating}
            </h4>
            <h4 className="btn btn-accent w-fit font-black text-lg">
              {data.price} $
            </h4>
            <h4 className="btn btn-accent w-fit font-black text-lg">
              {data.category} $
            </h4>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary mt-3">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
