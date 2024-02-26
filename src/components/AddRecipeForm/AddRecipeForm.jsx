import {
  AddRecipeBox,
  AddRecipeContainer,
  FormImage,
  AddRecipeDescript,
  Input,
  InputSelect,
  InputSelectTitle,
  SelectCategory,
  SelectCooking,
  TextAreaContainer,
  AddRecipeBoxTitle,
  TextArea,
  ButtonAdd,
  AddRecipeFollowPopular,
  FormContainer,
  Camera,
} from "./AddRecipeForm.styled.jsx";
import blank from "../../images/graphics/AddRecipePage/background-for-image-desktop@2x.jpg";
import { useEffect, useState } from "react";
import IngredientsFields from "../AddRecipeForm/RecipeIngredientsFields/RecipeIngredientsFields.jsx";
import FollowUs from "../FollowUs/FollowUs.jsx";
import PopularRecipe from "../PopularRecipe/PopularRecipe.jsx";
import { MainTitle } from "../../components/AddRecipeForm/MainTitle/MainTitle.jsx";
import { useDispatch, useSelector } from "react-redux";
import camera from "../../images/graphics/AddRecipePage/svg/cameraaaa (2).svg";
import selectTheme from "../../redux/theme/theme.selectors.js";
import cookingTime from "../../components/AddRecipeForm/data/cookingTime.json";
import selectUser from "../../redux/auth/selectors.js";
import { selectCategories } from "../../redux/recipe/Recipe.selectors.js";
import addRecipe from "../../redux/recipe/operations.js";
import { fetchCategoriesList } from "../../redux/ingredients/ingredients.operations.js";

const getFormData = () => {
  const storedValues = localStorage.getItem("form");
  if (!storedValues)
    return {
      title: "",
      description: "",
      category: "",
      time: "",
      instructions: "",
      ingredients: [],
    };
  return JSON.parse(storedValues);
};

const AddRecipeForm = () => {
  const [fileUploaded, setFileUploaded] = useState();
  const [initialList, setInitialList] = useState(false);
  const [gettingFilterData, setGettingFilterData] = useState(false);
  const [preview, setPreview] = useState(blank, camera);
  const [recipes, setRecipes] = useState(getFormData);

  const theme = useSelector(selectTheme);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(recipes));
  }, [recipes]);

  const { _id } = useSelector(selectUser);

  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const getFilterData = (arr) => {
    setRecipes((values) => ({
      ...values,
      ingredients: arr.map(({ id, ttl, thb, size, service }) => ({
        id,
        ttl,
        thb,
        measure: size + service,
      })),
    }));
  };

  const handleChangePhoto = (event) => {
    const fileUpl = event.target.files[0];
    setFileUploaded(fileUpl);
    const objectUrl = window.URL.createObjectURL(fileUpl);
    setPreview(objectUrl);
  };
  const handleChange = (event) => {
    setGettingFilterData(false);
    setInitialList(false);
    const name = event.target.name;
    const value = event.target.value;
    setRecipes((values) => ({ ...values, [name]: value }));
  };

  const resetForm = () => {
    setRecipes("");
    setPreview(blank);
    setInitialList(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setGettingFilterData(true);
    const formData = new FormData();
    if (fileUploaded !== undefined) {
      formData.append("preview", fileUploaded);
    }
    const ingredientsToJson = JSON.stringify(recipes.ingredients);
    Object.keys(recipes).map((key) =>
      key === "ingredients"
        ? formData.append(key, ingredientsToJson)
        : formData.append(key, recipes[key])
    );
    dispatch(addRecipe({ formData, _id }));
    resetForm();
  };

  return (
    <AddRecipeContainer>
      <AddRecipeBox>
        <MainTitle mode={theme} title="Add recipe" />
        <FormContainer>
          <form autoComplete="off" onSubmit={handleSubmit} id="resipeForm">
            <FormImage>
              <div>
                <label htmlFor="file-input">
                  <img
                    src={preview}
                    alt="Add recipe img"
                    style={{
                      maxWidth: "350px",
                      maxHeight: "340px",
                    }}
                  />
                  <Camera width="100px" height="100px">
                    <use href={`${camera}#icon-input_camera`}></use>
                  </Camera>
                </label>

                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleChangePhoto}
                  style={{
                    display: "none",
                    width: "350px",
                    height: "340px",
                  }}
                />
              </div>

              <AddRecipeDescript>
                <Input
                  type="text"
                  name="title"
                  value={recipes.title || ""}
                  placeholder="Enter item title"
                  onChange={handleChange}
                  mode={theme}
                />
                <Input
                  type="text"
                  placeholder="Enter about recipe"
                  name="description"
                  onChange={handleChange}
                  value={recipes.description || ""}
                  mode={theme}
                />
                <InputSelect mode={theme}>
                  <InputSelectTitle mode={theme}>Category</InputSelectTitle>
                  <SelectCategory
                    name="category"
                    onChange={handleChange}
                    value={recipes.category || ""}
                  >
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </SelectCategory>
                </InputSelect>

                <InputSelect mode={theme}>
                  <InputSelectTitle mode={theme}>Cooking time</InputSelectTitle>
                  <SelectCooking
                    name="time"
                    value={recipes.time || ""}
                    onChange={handleChange}
                  >
                    {cookingTime.map(({ value }) => {
                      return <option key={value}>{value}</option>;
                    })}
                  </SelectCooking>
                </InputSelect>
              </AddRecipeDescript>
            </FormImage>

            <IngredientsFields
              getFilterData={getFilterData}
              setInitialList={initialList}
              gettingFilterData={gettingFilterData}
              recipes={recipes}
              mode={theme}
            />

            <TextAreaContainer>
              <AddRecipeBoxTitle mode={theme}>
                Recipe Preparation
              </AddRecipeBoxTitle>
              <TextArea
                name="instructions"
                value={recipes.instructions || ""}
                placeholder="Enter recipe"
                scroll={true}
                onChange={handleChange}
                mode={theme}
              ></TextArea>
            </TextAreaContainer>
            <ButtonAdd type="submit" mode={theme}>
              Add
            </ButtonAdd>
          </form>
          <AddRecipeFollowPopular>
            <FollowUs mode={theme} />
            <PopularRecipe mode={theme} />
          </AddRecipeFollowPopular>
        </FormContainer>
      </AddRecipeBox>
    </AddRecipeContainer>
  );
};

export default AddRecipeForm;
