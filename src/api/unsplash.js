// axios Configuration connect to unsplash api
import axios from 'axios';

// setup default axios client instance
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 4pcWvsVj29s8L97mSsV0XpMExWyXTpXEXBIpQYn7rZo',
  }
});
