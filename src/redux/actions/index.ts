export const GET_ALBUMS = "GET_ALBUMS";

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
          payload: albumData,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};
