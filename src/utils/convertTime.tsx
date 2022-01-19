export const timeAgo = (date: string | number) => {
  const readableDate = new Date(date as number * 1000).toUTCString()
  return readableDate
}
