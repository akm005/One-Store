import { useState } from "react";
import { SearchInput } from "./search-input.styled";
export const SerchInputContainer = () => {
  const [val, setVal] = useState();
  return (
    <div className="search-box">
      <SearchInput value={val} onChange={(e) => setVal(e.target.value)} />
      {val && (
        <img
          onClick={() => setVal(() => "")}
          src="reset.svg"
          alt="reset"
          className="reset-img"
        />
      )}
    </div>
  );
};
