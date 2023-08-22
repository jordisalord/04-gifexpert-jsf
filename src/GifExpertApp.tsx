import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
  const initialState: string[] = [];
  const [categories, setCategories] = useState(initialState);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([...categories, newCategory]);
  }

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory
        onNewCategory={onAddCategory}
      ></AddCategory>

      {
        categories.map(
          (category) => (
            <GifGrid key={category} category={category} />
          )
        )
      }
    </>
  )
}
