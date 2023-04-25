
const API_URL = 'https://example.com/api';

export const getWeapons = async () => {
  try {
    const response = await fetch("https://ac-env.eba-gpuryyiq.us-west-1.elasticbeanstalk.com/weapons")
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

