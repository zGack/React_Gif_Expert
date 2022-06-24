import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Pixel Art', 'Terraria']);

    const onAddCategory = (newCategory) => {
        if (!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories]);
            //setCategories(cat => [...cat, newCategory]);
        }
    }

    const onRemoveCategory = (category) => {
        console.log(category);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado de GIFs */}

            {categories.map(category => (
                (
                    /* GIF Item */
                    < GifGrid
                        key={category}
                        category={category}
                        onDeleteCategory={(category) => onRemoveCategory(category)}
                    />
                )
            ))}
        </>
    );
}
