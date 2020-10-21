import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import "./Sidebar.css";
import { SidebarOption } from "./";
import { useDataLayerValue } from "../contextAPI/DataLayer";

function Sidebar() {
  const [{ playlists }] = useDataLayerValue();
  console.log(": ------------------------------");
  console.log("Sidebar -> playlists", playlists);
  console.log(": ------------------------------");

  return (
    <div className="sidebar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
        alt="Spotify logo"
        className="sidebar__logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
