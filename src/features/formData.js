import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    value: {
      id: '',
      employee_name: '',
      employee_salary: '',
      employee_age: '',
    },
  },
  reducers: {
    setFormData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
