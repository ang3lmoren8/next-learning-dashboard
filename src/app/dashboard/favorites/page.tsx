import PokemonGrid from '@/components/pokemons/PokemonGrid/PokemonGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pokemon favorites',
  description: 'This is a list of favorite pokemons',
}

const FavoritesPage = async () => {
  return <PokemonGrid pokemons={[]} />
}

export default FavoritesPage
