js/storage.js

// storage.js
const KEY = 'spa_contact_submissions_v1';

export const storage = {
  save(data) {
    const arr = this.getAll();
    arr.push({...data, createdAt: new Date().toISOString()});
    localStorage.setItem(KEY, JSON.stringify(arr));
  },
  getAll() {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  },
  clear() {
    localStorage.removeItem(KEY);
  }
};
