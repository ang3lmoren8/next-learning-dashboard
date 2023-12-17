import Image from 'next/image'
import { SimplePokemon } from '@/types/pokemons.types'
import {
  IoArrowForwardOutline,
  IoHeartOutline,
  IoTrailSignOutline,
} from 'react-icons/io5'
import Link from 'next/link'

const PokemonGridItem = ({ pokemon }: { pokemon: SimplePokemon }) => {
  return (
    <div className='w-[250px]'>
      <div className='bg-white overflow-hidden shadow-lg rounded-2xl'>
        <div className='flex justify-center p-6 bg-gray-800 border-b'>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={120}
            height={120}
            alt={pokemon.name}
          />
        </div>
        <div className='p-2'>
          <h4 className='text-lg font-bold text-center'>{pokemon.name}</h4>
        </div>

        <div className='border-b'>
          <a className='p-4 hover:bg-red-50 hover:text-red-900 flex'>
            <IoHeartOutline className='text-red-500' />
            <div className='pl-3'>
              <p className='leading-none'>Fav</p>
            </div>
          </a>
        </div>
        <div className='border-b'>
          <Link
            href={`/dashboard/pokemonDetail/${pokemon.id}`}
            className='w-full px-4 py-2 hover:bg-indigo-50 flex items-center hover:text-indigo-900 transition-all'
          >
            <IoArrowForwardOutline />
            <span className='pl-3'>
              More information
              <small className='block text-gray-400'>By Id</small>
            </span>
          </Link>
        </div>
        <Link
          href={`/dashboard/pokemon-detail/${pokemon.name}`}
          className='w-full px-4 py-2 hover:bg-indigo-50 flex items-center hover:text-indigo-900 transition-all'
        >
          <IoTrailSignOutline />
          <span className='pl-3'>
            More information
            <small className='block text-gray-400'>By name</small>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PokemonGridItem
