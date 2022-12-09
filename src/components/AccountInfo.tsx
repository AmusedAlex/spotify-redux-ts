import React from "react";

function AccountInfo() {
  return (
    <div className="col d-flex justify-content-end mr-3 mt-3">
      <div className="accountInfo d-flex rounded-pill p-1 mt-2 mr-2">
        <div className="profilePhotoDiv rounded-circle mr-1">
          <img
            src="https://image.shutterstock.com/mosaic_250/2780032/1770074666/stock-photo-head-shot-of-african-self-assured-executive-manager-portrait-successful-staff-member-company-1770074666.jpg"
            alt="Profile Foto"
            className="profileImg"
          />
        </div>
        <div className="profileName text-white align-self-center pl-1 pr-1">
          Alexander Spomer
        </div>
        <div className="profileArrowDown text-white align-self-center pl-1 pr-1">
          <i className="bi bi-caret-down-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
