import React from "react";

function GoodMorningCard({ data }: any) {
  console.log("🚀 GoodMorningCard ~ data", data);

  return (
    <div className="col-3">
      <a href="/">
        <div className="sidecards col-2">
          <img className="col-4" src={data?.album.cover_xl} alt={data?.title} />
          <p className="col-8 sidetext"></p>
        </div>
      </a>
    </div>
  );
}

export default GoodMorningCard;
