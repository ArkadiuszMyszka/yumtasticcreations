import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../redux/categories/selectors";
import { getMainPageRecipes } from "../../redux/recipes/operations";
import { getCategories } from "../../redux/categories/operations";
import { useMediaQuery } from "@uidotdev/usehooks";

export const PreviewCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const [recipes, setRecipes] = useState([]);
    const popularCategories = categories.items; 
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(min-width:601px) and (max-width:1024px)');
    
   useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                if (popularCategories.length > 0) {
                    const promises = popularCategories.map((category) => {
                        return dispatch(getMainPageRecipes(category.title));
                    });
                    const results = await Promise.all(promises);
                    const resultsRecipes = results.map((category) => {
                        return {
                            title: category.meta.arg,
                            recipes: category.payload,
                    }
                    })
                    setRecipes([...resultsRecipes])}
            } catch (err) {
                console.error("Wystąpił błąd:", err);
            }
        };
        fetchRecipes();
    }, [dispatch, popularCategories]);

    useEffect(() => {
        console.log("Updated recipes:", recipes);
    }, [recipes]);

    const getNumberOfRecipesToRender = () => {
        if (isMobile) {
            return 1;
        } else if (isTablet) {
            return 2;
        } else {
            return 4;
        }
    };

return (
    <div>
        <ul>
            {recipes.map((category) => (
                <li>
                    <h1>{category.title}</h1>
                    <ul>
                    {category.recipes.slice(0, getNumberOfRecipesToRender()).map((recipe) => {
                            return ( 
                            <li>    
                            <h3>{recipe.title}</h3>
                            <img src={recipe.thumb} alt={recipe.title} />
                            </li>
                            )
                        })}
                    </ul>
                </li>
            ))}
        </ul>
    </div>
)
};
