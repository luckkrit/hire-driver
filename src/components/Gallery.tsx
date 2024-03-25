import { Link, useLocation, useParams } from "react-router-dom";

export default function Gallery() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const { id } = useParams();
  return (
    <div>
      <h2>Gallery</h2>
      <div>Counter is {id}</div>
      <Link to={"/modal/" + (Number(id) + 1)} state={{ background }}>
        Open Modal {Number(id) + 1}
      </Link>
    </div>
  );
}
