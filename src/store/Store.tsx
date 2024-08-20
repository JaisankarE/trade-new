import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  USER_ID: 'userId',
  API_KEY: 'apiKey',
  SESSION_ID: 'sessionId',
  SESSION_DATE: 'sessionDate',
} as const;

type StorageKeys = keyof typeof STORAGE_KEYS;

// Fixed values 
const DEFAULT_VALUES = {
  USER_ID: '980193',
  API_KEY:'EpNQnIPCmhITPX5bl9nFNLnRE5zG9QX9cP8iYHH0acE7cCWNvEvcHxhR8I9jUNhSbCXB0ZKld8fa2dcngpCBKqD72rUlKWpKNibzD5fVNocHTFv02k67GvdmXgXu8ByL',
} as const;

type StoreData = {
  [key in StorageKeys]: string;
};

const multiSet = async (data: Partial<Record<StorageKeys, string>>) => {
  const entries: [string, string][] = Object.entries(data)
    .map(([key, value]) => [STORAGE_KEYS[key as StorageKeys], value]) as [string, string][];

  await AsyncStorage.multiSet(entries);
};

export const storeData = async () => {
  try {
    const existingData = await getData();
    if (!existingData.USER_ID) {
      await multiSet(DEFAULT_VALUES);
    }
  } catch (e) {
    console.error('Error storing data', e);
  }
};

export const getData = async (): Promise<Partial<Record<StorageKeys, string>>> => {
  try {
    const values = await AsyncStorage.multiGet(Object.values(STORAGE_KEYS));
    return Object.fromEntries(values);
  } catch (e) {
    console.error('Error retrieving data', e);
    return {};
  }
};

export const updateData = async (key: StorageKeys, value: string) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS[key], value);
  } catch (e) {
    console.error(`Error updating ${key}`, e);
  }
};

// Individual Get functions

export const getUserId = async (): Promise<string | null> => {
  try {
    const userId = await AsyncStorage.getItem(STORAGE_KEYS.USER_ID);
    return userId; 
  } catch (e) {
    console.error('Error retrieving USER_ID', e);
    return null;
  }
};

export const getApiKey = async (): Promise<string | null> => {
  try {
    const apiKey = await AsyncStorage.getItem(STORAGE_KEYS.API_KEY);
    return apiKey; 
  } catch (e) {
    console.error('Error retrieving API_KEY', e);
    return null;
  }
};

export const getSessionId = async (): Promise<string | null> => {
  try {
    const sessionId = await AsyncStorage.getItem(STORAGE_KEYS.SESSION_ID);
    return sessionId; 
  } catch (e) {
    console.error('Error retrieving SESSION_ID', e);
    return null;
  }
};

export const getSessionDate = async (): Promise<string | null> => {
  try {
    const sessionDate = await AsyncStorage.getItem(STORAGE_KEYS.SESSION_DATE);
    return sessionDate; 
  } catch (e) {
    console.error('Error retrieving SESSION_DATE', e);
    return null;
  }
};

// Individual update functions

export const updateSessionId = async (sessionId: string) => {
  await updateData('SESSION_ID', sessionId);
};

export const updateSessionDate = async (sessionDate: string) => {
  await updateData('SESSION_DATE', sessionDate);
};