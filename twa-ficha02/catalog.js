export const byCategory = (items, category) => items.filter(item => item.category === category);

export const search = (items, filter) => items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

export const top = (items, limit) => [...items].sort((a, b) => a-b ).slice(0, limit); 