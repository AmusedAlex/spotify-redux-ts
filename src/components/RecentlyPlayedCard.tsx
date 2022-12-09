import React, { useEffect } from "react";
import { getArtistsAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function RecentlyPlayedCard() {
  const dispatch = useDispatch();
  const artistsFromRedux = useSelector((state: any) => state.artists.data);
  console.log("🚀artistsFromRedux", artistsFromRedux);

  useEffect(() => {
    dispatch(getArtistsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return artistsFromRedux.slice(0, 6).map((artist: any) => (
    <div className="albumCard">
      <img
        className="col-11"
        src={artist.artist.picture_big}
        alt={artist.artist.name}
      />
      <div className="albumText">
        <p>{artist.artist.name}</p>
        <p>{artist.title}</p>
      </div>
    </div>
  ));
}

export default RecentlyPlayedCard;
