import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';
import {EpisodeType, SerialItemType} from '../../models/video';
import {RootState} from '..';

interface StateInterface {
  serial: SerialItemType | null;
  episode: EpisodeType | null;
  time: number | null;
}

type CurrentTimePayload = number | null;

const initialState: StateInterface = {
  serial: null,
  episode: null,
  time: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentSerial: (state, action: PayloadAction<SerialItemType>) => {
      state.serial = action.payload;
    },
    setCurrentEpisode: (state, action: PayloadAction<EpisodeType>) => {
      state.episode = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<CurrentTimePayload>) => {
      state.time = action.payload;
    },
    resetCurrentVideo: state => {
      state.episode = null;
      state.serial = null;
      state.time = null;
    },
  },
});

export const selectContinueWatching = createSelector(
  (state: RootState) => state.app,
  appState => appState,
);

export const {
  setCurrentSerial,
  setCurrentEpisode,
  setCurrentTime,
  resetCurrentVideo,
} = appSlice.actions;

export default appSlice.reducer;
