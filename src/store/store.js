import { create } from 'zustand';

export const useGeneralStore = create((set) => ({
    // массив стран
    countries: [],
    // текущая страна
    country: null,
    // ошибка при запросе
    error: null,
    // получение всех стран
    fetchCountries: async () => {
        try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
        const data = await response.json();
        set({ countries: data });
        } catch (error) {
        set({ error: 'Error fetching countries' });
        }
    },
    // получение детальной информации о стране
    fetchCountryDetails: async (name) => {
        try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!response.ok) {
            throw new Error('Country not found');
        }
        const data = await response.json();
        set({ country: data[0] });
        } catch (error) {
        set({ error: 'Error fetching country details' });
        }
    },
    // удаление ошибки
    clearError: () => set({ error: null }),
}));