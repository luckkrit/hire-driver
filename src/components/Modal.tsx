import { PropsWithChildren } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Modal = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  return (
    <div className="modalDiv">
      <div className="modal">
        {children}
        <button onClick={() => navigate(-1)}>Previous</button>
        <Link to="/">Close</Link>
      </div>
    </div>
  );
};
