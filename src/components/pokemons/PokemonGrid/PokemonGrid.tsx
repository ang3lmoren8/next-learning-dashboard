import { SimplePokemon } from '@/types/pokemons.types'
import PokemonGridItem from '../PokemonGridItem/PokemonGridItem'

const PokemonGrid = ({ pokemons }: { pokemons: SimplePokemon[] }) => {
  return (
    <div className='flex gap-6 flex-wrap justify-center'>
      {pokemons.map((pokemon) => (
        <PokemonGridItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonGrid
