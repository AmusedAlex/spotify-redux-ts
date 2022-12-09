export const GET_ALBUMS = "GET_ALBUMS";
export const GET_ARTISTS = "GET_ARTISTS";

export const getAlbumsAction: any = () => {
  const options = {
    method: "GET",
  };
  return async (dispatch: any, getState: any) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=bushido`,
        options
      );
      if (response.ok) {
        const albumData = await response.json();
        console.log(" getAlbums ~ albumData", albumData);
        dispatch({
          type: GET_ALBUMS,
          payload: albumData.data,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};

export const getArtistsAction: any = () => {
  const options = {
    method: "GET",
  };
  return async (dispatch: any, getState: any) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=rap`,
        options
      );
      if (response.ok) {
        const artistData = await response.json();
        console.log(" getartists ~ artistData", artistData);
        dispatch({
          type: GET_ARTISTS,
          payload: artistData.data,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};
