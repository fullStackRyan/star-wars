import errorImg from "../../assets/ls.webp";
import "./error-404.styles.css";

const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="title">404: Not Found</h1>
      <img src={errorImg} alt="Luke Skywalker screaming No!" />
    </div>
  );
};

export default Error404;
