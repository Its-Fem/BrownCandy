export const LocalStorageGet = (key) => {
	return localStorage.getItem(key);
}

export const LocalStoragSet = (key, value) => {
	localStorage.setItem(key, value);
}

export const LocalStorageClear = (key) => {
	localStorage.removeItem(key);
}
