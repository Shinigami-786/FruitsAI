import axios from 'axios';

const API_URL = 'http://localhost:5000/faqs';

export const addFAQ = async (faq) => {
  try {
    const response = await axios.post(API_URL, faq);
    return response.data;
  } catch (error) {
    console.error('Error adding FAQ:', error);
    throw error;
  }
};
