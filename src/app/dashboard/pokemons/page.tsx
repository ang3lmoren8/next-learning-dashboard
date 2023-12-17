import { getPokemons } from '@/api/pokemonsApi'
import PokemonGrid from '@/components/pokemons/PokemonGrid/PokemonGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pokemons list',
  description: 'This is a list of most of pokemons',
}

const PokemonsPage = async () => {
  const pokemons = await getPokemons(152)

  return <PokemonGrid pokemons={pokemons} />
}

export default PokemonsPage
