export type PokemonsResponse = {
  count: number
  next: string
  previous: null
  results: Result[]
}

type Result = {
  name: string
  url: string
}

export type SimplePokemon = {
  id: string
  name: string
}
