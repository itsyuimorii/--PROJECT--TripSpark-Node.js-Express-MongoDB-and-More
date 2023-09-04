

import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateData = async (name, email) => {
  try {
    const response = await axios({
      method: 'PATCH',
      url: 'http://127.0.0.1:3000/api/v1/users/updateMe',
      data: {
        name,
        email
      }
    })

    if (response.data.status === 'success') {
      showAlert('success', 'Data updated successfully!')
    }
  } catch (err) {
    showAlert('error', err.message.data.message)
  }
};