import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../redux/categories/selectors";
import { getCategories, getCategoryRecipes } from "../../redux/categories/operations";

export const PreviewCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories) 
    const popularCategories = categories.items

   useEffect(() => {
    dispatch(getCategories())
    .then(console.log("1", categories.items))
}, [dispatch])

    useEffect(() => {
      const fetchData = async () => {
        popularCategories.forEach(category => dispatch(getCategoryRecipes(category.title))
        .then(console.log("2", categories.payload.recipes)))
        }
        fetchData();
    }, [dispatch])



    return (
        <div>
            <ul>
                {/* {popularCategories.forEach(category => dispatch(getCategoryRecipes(category.title))
                .then(
                    
                ))} */}
            </ul>
        </div>
    )
}