import {
  SET_DISCOVER_WEEKLY,
  SET_PLAYLISTS,
  SET_TOKEN,
  SET_USER,
} from "./actions";

export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  item: null,
  discoverWeekly: null,
  // REMOVE after finished developing...
  // token:
  //   "BQBeBsY6PYJh-UgT11HqBhbQq9oavFwQ5T4DXaIUNtbUOPgsvhw9gOUBcgdtMB18TNvVh8kUcl0-MCvXidK_x0CKyrxfqPGV7b66bNZuHRfdkejFH2g02S5AM56yI_Zt8BisC5ueHa4ZYZXq8Qat2Av46mT-mQqzgxO154KrgAEbnCNM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      };
    default:
      return state;
  }
};

export default reducer;
