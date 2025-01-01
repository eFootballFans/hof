import { hallOfFameJsonData } from './data';

export const getHallOfFameJsonData = () => {
  try {
    return hallOfFameJsonData;
  } catch (error) {
    console.error('Error fetching Hall of Fame data:', error);
    return { hall_of_fame: [] };
  }
};