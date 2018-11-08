import { SessionStorageKey } from "./SessionStorageKey";
import SessionStorageRepository from "./SessionStorageRepository";

export default class SessionStorageService {
  public static getTableString(): string {
    return SessionStorageRepository
      .getItem(SessionStorageKey.tableString);
  }

  public static setTableString(tableString: string) {
    SessionStorageRepository
      .setItem(SessionStorageKey.tableString, tableString);
  }

  public static deleteTableString() {
    SessionStorageRepository
      .deleteItem(SessionStorageKey.tableString);
  }
}