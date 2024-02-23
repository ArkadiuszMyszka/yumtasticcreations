import {
  Form,
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
  Svg,
} from "./AddRecipeForm.styled.jsx";
import blank from "../../images/graphics/AddRecipePage/background-for-image-desktop@2x.jpg";
import { useEffect, useState } from "react";
import IngredientsFields from "../AddRecipeForm/RecipeIngredientsFields/RecipeIngredientsFields.jsx";
import FollowUs from "../FollowUs/FollowUs.jsx";
import PopularRecipe from "../PopularRecipe/PopularRecipe.jsx";
import { MainTitle } from "../../components/AddRecipeForm/MainTitle/MainTitle.jsx";
import { useDispatch, useSelector } from "react-redux";
import camera from "../../images/graphics/AddRecipePage/svg/camera.svg";
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
      <MainTitle mode={theme} title="Add recipe" />
      <AddRecipeBox>
        <Form autoComplete="off" onSubmit={handleSubmit} id="resipeForm">
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
            <Svg>
              <symbol id="icon-no-imagessvg" viewBox="0 0 32 32">
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-miterlimit="4"
                  stroke-width="0.5"
                  d="M28.191 11.428v-4.58c0 0 0 0 0 0 0-1.68-1.359-3.042-3.038-3.047l-4.581-0.014M28.191 20.572v4.572c0 1.683-1.364 3.047-3.047 3.047v0h-4.572M11.428 3.787l-4.58 0.015c-1.68 0.005-3.039 1.367-3.039 3.047 0 0 0 0.001 0 0.001v-0 4.579M11.428 28.191h-4.572c-1.683-0-3.047-1.365-3.047-3.047v-4.572"
                ></path>
                <path d="M16 18.75c0.625 0 1.157-0.218 1.594-0.656s0.656-0.969 0.656-1.594c0-0.625-0.218-1.156-0.656-1.594s-0.969-0.656-1.594-0.656c-0.625 0-1.156 0.219-1.594 0.656s-0.656 0.969-0.656 1.594c0 0.625 0.219 1.157 0.656 1.594s0.969 0.656 1.594 0.656zM12 20.5c-0.275 0-0.51-0.098-0.706-0.294-0.181-0.175-0.294-0.421-0.294-0.693 0-0.005 0-0.009 0-0.014v0.001-6c0-0.275 0.098-0.51 0.294-0.706 0.175-0.181 0.42-0.294 0.692-0.294 0.005 0 0.010 0 0.015 0h1.574l0.925-1h3l0.925 1h1.575c0.275 0 0.511 0.098 0.706 0.294s0.294 0.431 0.294 0.706v6c0 0.275-0.098 0.511-0.294 0.706-0.175 0.181-0.421 0.294-0.693 0.294-0.005 0-0.010-0-0.015-0h-7.999z"></path>
              </symbol>
            </Svg>
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
        </Form>
        <AddRecipeFollowPopular>
          <FollowUs mode={theme} />
          <PopularRecipe mode={theme} />
        </AddRecipeFollowPopular>
      </AddRecipeBox>
    </AddRecipeContainer>
  );
};

export default AddRecipeForm;
