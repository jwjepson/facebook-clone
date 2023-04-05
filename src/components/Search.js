import React, { useEffect, useState } from "react";
import "../styles/search.css";
import BackIcon from "../icons/back-icon";
import { collection, where, getDocs, query, limit} from "firebase/firestore";
import { debounce } from "lodash";
import defaultProfile from "../images/default-profile-pic.jpg";
import { useNavigate } from "react-router-dom";

const Search = ({toggleSearchBarDisplay, db}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleRedirect = (e) => {
        let userId = e.currentTarget.getAttribute("data-userid");
        toggleSearchBarDisplay();
        navigate(`/${userId}`);
    }

    useEffect(() => {
        const getQuery = debounce(async () => {
            if (searchQuery) {
                const q = query(
                    collection(db, "users"), 
                    where("firstName", ">=", searchQuery),
                    where("firstName", "<=", searchQuery + "\uf8ff"),
                    limit(10)
                );
                const querySnapshot = await getDocs(q);
                const docsData = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data() }));
                setResults(docsData);
            } else {
                setResults([]);
            }
        }, 500);

        getQuery();
    }, [searchQuery, db]);

    return (
        <div className="search-modal">
            <div className="search-functions">
                <BackIcon onClick={toggleSearchBarDisplay}/>
                <input onChange={handleChange}className="search-box" placeholder="Search Facebook Clone" value={searchQuery} autoComplete="off" type="search" name="search" autoFocus></input>
            </div>
            <div className="search-results">
                {results.length > 0 ? (
                    results.map((result) => (
                        <div onClick={handleRedirect} data-userid={result.id} className="result">
                            <img className="sidenav-icons" alt="Avatar"src={defaultProfile}></img>
                            <h4 className="result-name">{result.firstName} {result.lastName}</h4>
                        </div>
                    ))
                ) : (
                    <div className="no-results">No results found</div>
                )}
            </div>
        </div>
    )
}

export default Search;