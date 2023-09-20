export const LOCAL_STORAGE_ITEM_KEY = 'settings'

export class LocalStorage {
  getItemByKey (key: string): any {
    const data = JSON.parse((localStorage as any).getItem(LOCAL_STORAGE_ITEM_KEY))
    if (Object.keys(data ?? {}).length > 0) return data[key]
    return null
  }

  setItembyKey (key: string, value: any): void {
    const data = JSON.parse((localStorage as any).getItem(LOCAL_STORAGE_ITEM_KEY))
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      data !== undefined
        ? JSON.stringify({ ...data, [key]: value })
        : JSON.stringify({ [key]: value })
    )
  }

  removeItembyKey (key: string): void {
    const data = JSON.parse((localStorage as any).getItem(LOCAL_STORAGE_ITEM_KEY))
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify({ ...data, [key]: undefined })
    )
  }

  clearStorage (): void {
    localStorage.removeItem(LOCAL_STORAGE_ITEM_KEY)
  }
}
