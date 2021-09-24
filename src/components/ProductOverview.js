import React from "react";
import "../styles/ProductOverview.css";
function ProductOverview({ overview }) {
  return (
    <div className="productOverview">
      <table>
        <tbody>
          {Object.entries(overview).map((i, item) => (
            <tr className="productOverview__item" key={i}>
              <td>
                <strong>{item[0]}</strong>
              </td>
              <td>{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductOverview;
