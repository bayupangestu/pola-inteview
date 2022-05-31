import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../store/actionCreators/songs";

export default function Dashboard() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
}
