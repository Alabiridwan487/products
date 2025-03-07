import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
  baseURL,
});

// Register User MiddleWare
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/register", data); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Something went wrong" });
    }
  }
);

// Login MiddleWare
export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/sign-in", data);
      return response.data;
    } catch (error) {
        console.log(error);
        
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial State
const initialState = {
  loading: false,
  token: localStorage.getItem("token") || "",
  data: {},
  error: [],
};

// Authentication Slice
const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.token = "";
      state.data = {};
      state.error = [];
    },
    clearError: (state) => {
      state.loading = false;
      state.error = [];
    },
  },
  extraReducers: (builder) => {
    // Register User
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = [];
        state.data = {};
        localStorage.removeItem("token");
        state.token = ""; // Clear the token
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        localStorage.setItem("token", action.payload.token);
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

    // Handle Login
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = [];
        state.data = {};
        localStorage.removeItem("token");
        state.token = ""; // Clear the token
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { clearState, clearError } = authSlice.actions;
export default authSlice.reducer;