import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

function LeftRightArrows() {
  return (
    <div className="col d-flex justify-content-start">
      <div className="prev-next-buttons">
        <button type="button">
          <ChevronLeft className="text-white" />
        </button>
        <button type="button">
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default LeftRightArrows;
