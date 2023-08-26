import { Link } from "react-router-dom";
import Card from "./Card";

function Results({data}) {
  if (!data.length) {
    return <h2 className="noResults"> No Results Found</h2>;
  }

  return (
      <div>
          <div className="results">
          {data.map((item) => (
            <Link
              to={`/details/${item.id}`}
              className="image"
              style={{ textDecoration: "none" }}
            >
              <Card data={item}/>
            </Link>
          ))}
        </div>
    </div>
  );
}
export default Results;
