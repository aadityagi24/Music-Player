import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  items: [
    { id: 1, name: "Level", albums: "Single", singer: "Sidhu Moosewala", duration: "4:15", imageSrc: "level.jpg", song: "Level.mp3", liked: false },
    { id: 2, name: "Angreji Beat", albums: "Single", singer: "Yo Yo Honey Singh", duration: "4:15", imageSrc: "angrezi beat.jpg", song: "angreji beat.mp3", liked: false },
    { id: 3, name: "Uud Gya", albums: "Single", singer: "B Praak", duration: "4:15", imageSrc: "udd gaya.jpg", song: "uud gya.mp3", liked: false },
    { id: 4, name: "Time Table", albums: "Single", singer: "Kulwinder Billa", duration: "4:15", imageSrc: "Time table.jpg", song: "Time table.mp3", liked: false },
    { id: 5, name: "Viah", albums: "Single", singer: "Jass Manak", duration: "4:15", imageSrc: "viah.jpg", song: "viah.mp3", liked: false },
    { id: 6, name: "Step Cut", albums: "Single", singer: "Sandeep Brar", duration: "4:15", imageSrc: "step cut.jpg", song: "step cut.mp3", liked: false }
  ],
  loading: false,
  error: null
};

// Create the slice
const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    likedMusic: (state, action) => {
      const songId = parseInt(action.payload, 10);
      const song = state.items.find(item => item.id === songId);
      if (song) {
        song.liked = !song.liked; // Toggle liked state
      }
    }
  }
});

// Export the actions and reducer
export const { likedMusic } = musicSlice.actions;
export default musicSlice.reducer;
