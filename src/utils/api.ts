const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function searchMeals(query: string) {
  const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
  if (!res.ok) throw new Error('Failed to fetch meals by search');
  return res.json();
}

export async function getMealById(id: string) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  if (!res.ok) throw new Error('Failed to fetch meal by id');
  return res.json();
}

export async function filterByArea(area: string) {
  const res = await fetch(`${BASE_URL}/filter.php?a=${encodeURIComponent(area)}`);
  if (!res.ok) throw new Error('Failed to fetch meals by area');
  return res.json();
}
