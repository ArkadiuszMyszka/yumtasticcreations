import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../redux/categories/selectors";
import { getMainPageRecipes } from "../../redux/recipes/operations";
import { getCategories } from "../../redux/categories/operations";
// import { selectRecipes, selectLoadingStatus, selectError } from "../../redux/recipes/selectors";

export const PreviewCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    // const categoryRecipes = useSelector(selectRecipes);
    // const isLoading = useSelector(selectLoadingStatus);
    // const error = useSelector(selectError);
    const beef = "Beef";
    const popularCategories = categories.items;

   useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    // useEffect(() => {
    //     dispatch(getMainPageRecipes());
    //   }, [dispatch]);
    
    // useEffect(() => {
    //    const fetchRecipes = async () => {
    //     try {
    //         if (popularCategories.length > 0) {
    //         popularCategories.forEach((category) => {
    //         dispatch(getMainPageRecipes(category.title))
    //         });
    //      }
    //     } catch (err) {
    //         console.error("Wystąpił błąd:", err);
    //     }
    //    }
    // }, [dispatch, popularCategories, recipes])

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                if (popularCategories.length > 0) {
                    const promises = popularCategories.map((category) => {
                        return dispatch(getMainPageRecipes(category.title));
                    });
                    const results = await Promise.all(promises);
                    return results;
                }
            } catch (err) {
                console.error("Wystąpił błąd:", err);
            }
        };

        fetchRecipes()
            .then((results) => {
                results.find(result => result.meta.arg === beef);
            })
            .catch((error) => {
                console.error("Wystąpił błąd podczas pobierania przepisów:", error);
            });
    }, [dispatch, popularCategories, beef]);

return (
    <div>
        <ul>
            {popularCategories.map((category) => (
                <li key={category.id}>
                    <h1>{category.title}</h1>
                    <ul>
                    </ul>
                </li>
            ))}
        </ul>
    </div>
)