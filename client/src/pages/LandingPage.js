import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import { useQuery, useMutation, gql } from '@apollo/client'

const ANIMALS_QUERY = gql`
    {
        animals 
        {
            image
            id
            title
            price
            slug
        } 
    }
`

const ADD_ANIMAL_MUTATION = gql`
mutation(
    $image: String!,
    $category: String!,
    $title: String!,
    $stock: Int!,
    $price: String!,
    $description: [String!]!,
    $rating: Float,
    $slug: String!
) {
    addAnimal(
        image: $image,
        category: $category,
        title: $title,
        stock: $stock,
        price: $price,
        description: $description,
        rating: $rating,
        slug: $slug,
    ) {
        id
    }
}
`

function LandingPage() {

    const { loading, error, data } = useQuery(ANIMALS_QUERY)

    const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION)

    if (loading) return <div>Loading..</div>

    if (error) return <div>Error..</div>

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals} />
            <button onClick={() => {
                addAnimal({
                    variables: {
                        image: "cat",
                        category: "1",
                        title: "Mumu the meow",
                        stock: 15,
                        price: "4344",
                        description: ["adffhhfgd"],
                        rating: 4.5,
                        slug: "cat"
                    }
                })
            }}>Add an animal</button>
        </div>
    )
}

export default LandingPage
