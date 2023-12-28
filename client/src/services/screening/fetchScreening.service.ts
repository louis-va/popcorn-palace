import { IScreening } from '@/types/types';

export const fetchScreening = async (id: string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/screenings/${id}`, { method: 'GET' });
    if (!response.ok) throw new Error('Failed to fetch data');

    const screening: IScreening = await response.json();

    return {
      ...screening,
      date: new Date(screening.date)
    };
  } catch (error: any) {
    throw new Error(error.message || 'An error occurred');
  }
};