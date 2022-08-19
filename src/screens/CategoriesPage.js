import React, { useCallback, useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import PageScroller from "../components/PageScroller";
import { getCategories, getCategorySubs } from "../controllers/categories";
import CategoriesList from "../components/CategoriesList";
import Loader from "../components/Loader";
import { pageNames } from "../constants/pages";

function CategoriesPage({ navigator, screenTitle = "Категории", path }) {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoryMeta, setCategoryMeta] = useState({});

  useEffect(() => {
    uploadData();
  }, []);

  const goSubcategories = async (category) => {
    const { id, path, h1, name } = category;
    const isSubs = await isSubcategories(id);
    isSubs
      ? navigator.push(pageNames.CategoriesPage, {
          screenTitle: h1 || name,
          path,
        })
      : navigator.push(pageNames.ItemsPage, {
        screenTitle: h1 || name,
        categoryId: id,
      });
  };

  const uploadData = useCallback(
    async (page) => {
      !isLoading && setIsLoading(true);
      const { items, meta } = await getCategories(page, path);
      setCategories(items);
      setCategoryMeta(meta);
      isLoading && setIsLoading(false);
    },
    [isLoading]
  );

  const isSubcategories = async (categoryId) => {
    const subCategories = await getCategorySubs(categoryId);
    return subCategories[0] && true;
  };

  const setPageNumber = async (pageNumber) => {
    setCategoryMeta((prevState) => ({ ...prevState, currentPage: pageNumber }));
    await uploadData(pageNumber);
  };

  return (
    <MainLayout navigator={navigator} screenTitle={screenTitle}>
      {!isLoading && (
        <CategoriesList
          categories={categories}
          goSubcategories={goSubcategories}
        />
      )}
      {isLoading && <Loader />}
      {categoryMeta.pageCount > 1 && (
        <PageScroller
          onChange={setPageNumber}
          currentPage={categoryMeta.currentPage}
          pageCount={categoryMeta.pageCount}
        />
      )}
    </MainLayout>
  );
}

export default CategoriesPage;
