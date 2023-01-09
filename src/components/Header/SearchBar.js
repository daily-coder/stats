import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDataContext } from "../DataProvider";

function SearchBar() {
  const { setCssData, setLoading, setError } = useDataContext();
  // default value would be google.com
  const [searchValue, setSearchValue] = useState("google.com");
  // we will fetch new data whenever urlCount increments
  const [urlCount, setUrlCount] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!searchValue) {
      setError(true);
      setLoading(false);
      return;
    }

    const endPoint = "https://cssstats.com/api/stats?url=";
    const url = endPoint + searchValue;

    setLoading(true);
    setError(false);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw res.status;
        }
        return res.json();
      })
      .then((data) => {
        setCssData(data);
        setLoading(false);
        setError(false);
        navigate("/category/overview");
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setCssData(null);
        setLoading(false);
        setError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlCount]);

  function handleChange(ev) {
    setSearchValue(ev.target.value);
  }

  function loadCssDataOnEnter(ev) {
    if (ev.target.value && ev.key === "Enter") {
      setUrlCount((prevUrlCount) => prevUrlCount + 1);
    }
  }

  function loadCssDataOnClick() {
    setUrlCount((prevUrlCount) => prevUrlCount + 1);
  }

  return (
    <div className="mx-auto flex w-96 overflow-hidden rounded-md focus-within:ring-1 focus-within:ring-blue-700">
      <input
        className="mx-auto min-w-0 grow bg-gray-200 px-4 py-2 text-lg outline-none dark:bg-slate-700 dark:text-white"
        type="search"
        name="searchValue"
        value={searchValue}
        placeholder="type URL"
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={loadCssDataOnEnter}
      />
      <button
        className="min-w-[3rem] bg-blue-700 text-xl text-white"
        type="button"
        aria-label="search button"
        onClick={loadCssDataOnClick}
      >
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
