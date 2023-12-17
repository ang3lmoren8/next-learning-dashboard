export const getCounterDefaultValue = (): Promise<{
  counter: number
}> => fetch('/api/counter').then((res) => res.json())
