import React, { useEffect } from "react";
import { getAlbumsAction } from "../redux/actions";
import AccountInfo from "./AccountInfo";
import GoodMorningCard from "./GoodMorningCard";
import LeftRightArrows from "./LeftRightArrows";
import MusicPlayer from "./MusicPlayer";
import RecentlyPlayedCard from "./RecentlyPlayedCard";
import { useDispatch, useSelector } from "react-redux";

function Homepage() {
  const dispatch = useDispatch();
  const albumsFromRedux = useSelector((state: any) => state.albums.data);
  console.log("🚀albumsFromRedux", albumsFromRedux);

  useEffect(() => {
    dispatch(getAlbumsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <!--Main Page--> */}
      {/* <!--Prev,Next Buttons--> */}

      <div className="row">
        <LeftRightArrows />

        {/* <!--Account--> */}
        <AccountInfo />
      </div>

      {/* <!--Cards--> */}
      <div className="row mt-3 scrollit">
        <div className="row" id="cardstart">
          <h1 className="col-12 mb-4 d-flex">Good Morning</h1>
          {albumsFromRedux ? (
            albumsFromRedux
              .slice(0, 8)
              .map((album: any) => <GoodMorningCard data={album} />)
          ) : (
            <p>hi</p>
          )}
        </div>

        <div className="row  mt-3" id="mainrow">
          <h2 className="col-12 mb-4 d-flex">Recently Played</h2>
          <div className="col-12 pl-3 row" id="firstAlbumRow">
            <RecentlyPlayedCard />
          </div>
        </div>
      </div>

      {/* <!-- Music Player Bar --> */}
      <MusicPlayer />
    </>
  );
}

export default Homepage;
