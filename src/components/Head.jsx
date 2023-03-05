import React from "react";
import { Search } from "@mui/icons-material";

const Head = () => {
  return (
    <div className="head">
      <div className="floatingSearchBar">
        <div className="searchBarContainer">
          <h2 className="searchBarText">Groceries delivered in 30 minutes</h2>
          <form className="searchArea">
            <table className="headTable">
              <tbody>
                <tr className="trHead">
                  <td>
                    <input
                      type="text"
                      className="searchBoxHead"
                      autoComplete="off"
                      placeholder="Search for Products (e.g. eggs, milk, potato"
                    />
                  </td>
                  <td className="buttonCell">
                    <button type="submit" className="button2">
                      <Search />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          {/* <input type="text" aria-label='Search for Products (e.g. eggs, milk, potato'/> */}
        </div>
      </div>
    </div>
  );
};

export default Head;
