import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite((isFavorite) => !isFavorite);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteListing(listing));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button
            className="emoji-button favorite active"
            onClick={handleFavorite}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
