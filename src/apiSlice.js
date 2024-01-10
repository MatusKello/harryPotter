import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk for fetching students
export const fetchAllStudents = createAsyncThunk(
  'potterAPI/fetchStudents',
  async () => {
    try {
      const response = await fetch(
        'https://hp-api.onrender.com/api/characters/students'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle the error and pass it along with the rejected action
      throw new Error('Failed to fetch students');
    }
  }
);

// Create an async thunk for fetching teachers
export const fetchTeachers = createAsyncThunk(
  'potterAPI/fetchTeachers',
  async () => {
    const response = await fetch(
      'https://hp-api.onrender.com/api/characters/staff'
    );
    return response.json();
  }
);

// Create a slice
const potterSlice = createSlice({
  name: 'potter',
  initialState: {
    students: [],
    teachers: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStudents.pending, (state) => {
        // You can handle loading status here if needed
        state.error = null; // Reset error when starting to fetch
      })
      .addCase(fetchAllStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.error = null; // Reset error on successful fetch
      })
      .addCase(fetchAllStudents.rejected, (state, action) => {
        state.error = action.error.message;
      });
    /*    .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.teachers = action.payload;
      }); */
  },
});

export default potterSlice.reducer;
