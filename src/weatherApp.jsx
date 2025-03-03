import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./searchBox";
import "./weatherApp.css";

export default function WeatherApp() {

    const [searchResult, setSearchResult] = useState({});

    let updateSearch = (newResult) => {
        setSearchResult(newResult);
    }

    return (
        <div className="weatherApp">
            <SearchBox updateSearch={updateSearch} />
            <br />
            <InfoBox searchResult={searchResult}  />
        </div>
    );
}