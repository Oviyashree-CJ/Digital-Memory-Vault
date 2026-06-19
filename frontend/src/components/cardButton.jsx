import { useNavigate } from "react-router-dom";

const CardButton = ({ title, path, height = "140px" }) => {
  const navigate = useNavigate();

  return (
    <button
      className="btn w-100 text-black fw-bold d-flex align-items-center justify-content-center fs-3"
      style={{
        height,
        border: "2px solid black",
        borderRadius: "12px",
      }}
      onClick={() => navigate(path)}
    >
      {title}
    </button>
  );
};

export default CardButton;