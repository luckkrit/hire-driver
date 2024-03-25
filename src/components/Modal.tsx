import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Modal = () => {
  const navigate = useNavigate();

  const location = useLocation();
  return (
    <div className="modalDiv">
      <div className="modal">
        <h3>Modal</h3>

        <Link to="/modal2" state={{ background: location }}>
          Modal 2
        </Link>
        <button onClick={() => navigate(-1)}>Close</button>
      </div>
    </div>
  );
};
