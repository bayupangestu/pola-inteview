import { FETCH_SONGS, DELETE_SONG, CREATE_SONG, UPDATE_SONG } from "../actionTypes";

const base_url = "http://localhost:3000/songs";

export function fetchSongs() {
  return async (dispatch) => {
    try {
      const response = await fetch(base_url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.message);
      }
      return dispatch({ type: FETCH_SONGS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}
