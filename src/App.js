import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import { Login, Player } from "./components";
import { getTokenFromUrl } from "./spotify/spotify";
import { useDataLayerValue } from "./contextAPI/DataLayer";
import {
  SET_DISCOVER_WEEKLY,
  SET_PLAYLISTS,
  SET_TOKEN,
  SET_USER,
} from "./contextAPI/actions";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: SET_TOKEN,
        token: _token,
      });

      spotify.setAccessToken(_token);

      (async () => {
        const user = await spotify.getMe();
        dispatch({
          type: SET_USER,
          user,
        });

        const playlists = await spotify.getUserPlaylists();
        dispatch({
          type: SET_PLAYLISTS,
          playlists,
        });

        const response = await spotify.getPlaylist("37i9dQZF1DX0XUfTFmNBRM");
        dispatch({
          type: SET_DISCOVER_WEEKLY,
          discoverWeekly: response,
        });
      })();
    }
  }, [user, token]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
