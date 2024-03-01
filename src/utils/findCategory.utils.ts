import { categories } from "../mocks/categories.mock";

const findCategory = (category: string) => {

    const localCategories = localStorage.getItem("listCategories")
    let listCategories = [...categories]

    if(localCategories){
        listCategories = listCategories.concat(JSON.parse(localCategories))
    }

    const findCategorie = listCategories.some((item) => item.toLowerCase().trim() === category.toLowerCase().trim())

    return findCategorie
}

export default findCategory