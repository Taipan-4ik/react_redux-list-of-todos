/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';
import { FilterType } from '../types/FilterType';

type FilterState = {
  query: string;
  status: FilterType;
  list: Todo[];
};

const initialState: FilterState = {
  query: '',
  status: 'all',
  list: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setStatus: (state, action: PayloadAction<FilterType>) => {
      state.status = action.payload;
    },
    setList: (state, action: PayloadAction<Todo[]>) => {
      state.list = action.payload;
    },
  },
});
