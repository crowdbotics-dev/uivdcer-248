import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_hnnjd_list = createAsyncThunk(
  "hnnjds/api_v1_hnnjd_list",
  async payload => {
    const response = await apiService.api_v1_hnnjd_list(payload)
    return response.data
  }
)
export const api_v1_hnnjd_create = createAsyncThunk(
  "hnnjds/api_v1_hnnjd_create",
  async payload => {
    const response = await apiService.api_v1_hnnjd_create(payload)
    return response.data
  }
)
export const api_v1_hnnjd_retrieve = createAsyncThunk(
  "hnnjds/api_v1_hnnjd_retrieve",
  async payload => {
    const response = await apiService.api_v1_hnnjd_retrieve(payload)
    return response.data
  }
)
export const api_v1_hnnjd_update = createAsyncThunk(
  "hnnjds/api_v1_hnnjd_update",
  async payload => {
    const response = await apiService.api_v1_hnnjd_update(payload)
    return response.data
  }
)
export const api_v1_hnnjd_partial_update = createAsyncThunk(
  "hnnjds/api_v1_hnnjd_partial_update",
  async payload => {
    const response = await apiService.api_v1_hnnjd_partial_update(payload)
    return response.data
  }
)
export const api_v1_hnnjd_destroy = createAsyncThunk(
  "hnnjds/api_v1_hnnjd_destroy",
  async payload => {
    const response = await apiService.api_v1_hnnjd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const hnnjdsSlice = createSlice({
  name: "hnnjds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_hnnjd_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hnnjd_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hnnjd_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hnnjd_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hnnjd_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hnnjd_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hnnjd_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hnnjd_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hnnjd_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hnnjd_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hnnjd_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hnnjd_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hnnjd_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hnnjd_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hnnjd_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hnnjd_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hnnjd_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hnnjd_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_hnnjd_list,
  api_v1_hnnjd_create,
  api_v1_hnnjd_retrieve,
  api_v1_hnnjd_update,
  api_v1_hnnjd_partial_update,
  api_v1_hnnjd_destroy,
  slice: hnnjdsSlice
}
