import {
  Label,
  BoxSelector,
  Select,
  TypeBox,
} from "./SearchTypeSelector.styled";

export default function SearchTypeSelector({ onHandleChange, defaultValue }) {
  return (
    <BoxSelector>
      <Label htmlFor="search">Search by:</Label>
      <TypeBox>
        <Select
          id="search"
          name="type"
          defaultValue={defaultValue}
          onChange={onHandleChange}
        >
          <option value="title">Title</option>
          <option value="ingredients">Ingredients</option>
        </Select>
      </TypeBox>
    </BoxSelector>
  );
}
