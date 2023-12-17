import { getPokemonById, getPokemons } from '@/appApi/pokemonsApi'
import { Metadata } from 'next'
import PokemonSummary from '@/components/pokemons/PokemonSummary/PokemonSummary'

interface Props {
  params: { id: string }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  try {
    const { id, name } = await getPokemonById(params.id)

    return {
      title: `#${id} - ${name}`,
      description: `${name} detail page by id`,
    }
  } catch (error) {
    return {
      title: 'Error',
      description: 'An unexpected error occurs in pokemon detail by id page',
    }
  }
}

/**
 * Creates at least first 152 pages by id in build time
 */
export const generateStaticParams = async (): Promise<Props['params'][]> => {
  const pokemonsList = await getPokemons(152)
  return pokemonsList.map((pokemon) => ({ id: pokemon.id }))
}

const PokemonByIdDetailPage = async ({ params }: Props) => {
  const pokemon = await getPokemonById(params.id, {
    next: {
      revalidate: 60 * 60 * 24, //Revalidate if content have changed every day
    },
  })

  return <PokemonSummary pokemon={pokemon} />
}

export default PokemonByIdDetailPage
