import { IScreeningItem } from '@/types/types';

export const fetchScreenings = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/screenings`, {
      method: 'GET',
    });
    if (!response.ok) throw new Error('Failed to fetch data');

    const screenings: IScreeningItem[] = await response.json();
    const sortedScreenings = screenings
      .map(screening => ({ ...screening, date: new Date(screening.date) }))
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    return sortedScreenings;
  } catch (error: any) {
    throw new Error(error.message || 'An error occurred');
  }
};