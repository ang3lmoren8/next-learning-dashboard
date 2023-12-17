import { PokemonsResponse, SimplePokemon } from '@/types/pokemons.types'
import { PokemonDetail } from '@/types/pokemonDetail.types'
import { notFound } from 'next/navigation'

export const getPokemons = (limit = 20, offset = 0): Promise<SimplePokemon[]> =>
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => res.json())
    .then((pokemonsRes: PokemonsResponse) =>
      pokemonsRes.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
      }))
    )

export const getPokemonById = (
  id: string,
  requestInit?: RequestInit
): Promise<PokemonDetail> =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, requestInit)
    .then((res) => res.json())
    .catch(() => notFound())

export const getPokemonByName = (
  name: string,
  requestInit?: RequestInit
): Promise<PokemonDetail> =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, requestInit)
    .then((res) => res.json())
    .catch(() => notFound())
