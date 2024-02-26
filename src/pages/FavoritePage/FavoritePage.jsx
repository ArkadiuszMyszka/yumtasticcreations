import ListWithPagination from "../../Components/ui/ListWithPagination/ListWithPagination";
import MainPageTitle from "../../Components/ui/MainPageTitle/MainPageTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import { getUserFavouritesPaginationRecipes } from "../../redux/recipes/operations";
import {
  selectPagination,
  selectUserFavoritesIsLoading,
  selectUserFavouritesRecipes,
} from "../../redux/recipes/selectors";
import styled from "styled-components";


const FavoritePage = () => {
  const dispatch = useDispatch();
  const userFavoriteList = useSelector(selectUserFavouritesRecipes);
  const isLoading = useSelector(selectUserFavoritesIsLoading);
  const isLoadingOperation = useSelector(selectIsLoading);
  const { currentPage, totalPages } = useSelector(selectPagination);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      dispatch(getUserFavouritesPaginationRecipes(currentPage));
      setIsReady(true);
    }
  }, [dispatch, currentPage, isReady]);

  return (
    <Box>
      <MainPageTitle title="Favorites" />
      <ListWithPagination
        list={userFavoriteList}
        isLoading={isLoading}
        isLoadingOperation={isLoadingOperation}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </Box>
  );
};

export default FavoritePage;

const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 343px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
