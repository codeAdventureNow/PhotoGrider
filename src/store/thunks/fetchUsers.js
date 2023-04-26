import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');

  return response.data;
});

//automatically added in as part of thunk
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fullfilled'
// fetchUsers.rejected === 'users/fetch/rejected'

export { fetchUsers };
