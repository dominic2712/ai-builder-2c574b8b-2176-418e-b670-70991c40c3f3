export const fetchAIData = async () => {
  const response = await fetch('/api/ai-data');
  if (!response.ok) {
    throw new Error('Failed to fetch AI data');
  }
  return response.json();
};