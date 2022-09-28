import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => setListings(data));
  }, []);

  function handleDeleteListing(deletedListing) {
    const updatedListing = listings.filter(
      (listing) => listing.id !== deletedListing.id
    );
    setListings(updatedListing);
  }

  const displayListing = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header search={setSearch} />
      <ListingsContainer
        listings={displayListing}
        onDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
