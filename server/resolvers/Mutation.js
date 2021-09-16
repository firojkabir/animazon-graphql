const { v4 } = require("uuid")

const Mutation = {
    addAnimal: (parent, {
        image,
        title,
        rating,
        price,
        description,
        slug,
        stock,
        onSale,
        category,
    }, { animals }) => {
        let newAnimal = {
            id: v4(),
            image,
            title,
            rating,
            price,
            description,
            slug,
            stock,
            onSale,
            category,
        }

        animals.push(newAnimal)

        return newAnimal
    }
}

module.exports = Mutation
