import { getPokemonByName, getPokemons } from '@/appApi/pokemonsApi'
import PokemonSummary from '@/components/pokemons/PokemonSummary/PokemonSummary'
import { Metadata } from 'next'

interface Props {
  params: { name: string }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  try {
    const { id, name } = await getPokemonByName(params.name)

    return {
      title: `#${id} - ${name}`,
      description: `${name} detail page by name`,
    }
  } catch (error) {
    return {
      title: 'Error',
      description: `An unexpected error occurs in pokemon detail by name page.`,
    }
  }
}

export const generateStaticParams = async (): Promise<
  Array<{ name: string }>
> => {
  const pokemonsList = await getPokemons(152)
  return pokemonsList.map((pokemon) => ({ name: pokemon.name }))
}

const PokemonByNameDetailPage = async ({ params }: Props) => {
  const pokemon = await getPokemonByName(params.name, {
    next: {
      revalidate: 60 * 60 * 24, //Revalidate if content have changed every day
    },
  })

  return <PokemonSummary pokemon={pokemon} />
}

export default PokemonByNameDetailPage
