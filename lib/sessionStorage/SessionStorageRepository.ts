import { SessionStorageKey } from './SessionStorageKey';

export default class SessionStorageRepository {
  public static getItem(key: SessionStorageKey): string {
    return sessionStorage.getItem(this.getKeyAsString(key));
  }

  public static setItem(key: SessionStorageKey, value: string) {
    sessionStorage.setItem(this.getKeyAsString(key), value);
  }

  public static deleteItem(key: SessionStorageKey) {
    sessionStorage.removeItem(this.getKeyAsString(key));
  }

  public static getKeyAsString(key: SessionStorageKey): string {
    return SessionStorageKey[key];
  }
}