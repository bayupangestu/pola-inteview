import { FETCH_SONGS } from "../actionTypes";

const initialState = {
  songs: [],
};

export default function songsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_SONGS:
      return { ...state, movies: payload };
    default:
      return state;
  }
}
