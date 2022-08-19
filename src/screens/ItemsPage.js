import React, { useCallback, useEffect, useState } from "react";
import ItemsList from "../components/ItemsList";
import Loader from "../components/Loader";
import MainLayout from "../components/MainLayout";
import PageScroller from "../components/PageScroller";
import { getItems } from "../controllers/items";

function ItemsPage({ navigator, categoryId, screenTitle = "Товары" }) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [itemsMeta, setItemsMeta] = useState({});

  useEffect(() => {
    uploadData();
  }, []);

  const uploadData = useCallback(
    async (page) => {
      !isLoading && setIsLoading(true);
      const { items, meta } = await getItems(page, categoryId);
      setItems(items);
      setItemsMeta(meta);
      isLoading && setIsLoading(false);
    },
    [isLoading]
  );

	const setPageNumber = async (pageNumber) => {
    setItemsMeta((prevState) => ({ ...prevState, currentPage: pageNumber }));
    await uploadData(pageNumber);
  };

  return (
    <MainLayout screenTitle={screenTitle} navigator={navigator}>
      {!isLoading && <ItemsList items={items} />}
      {isLoading && <Loader />}
      <PageScroller
        onChange={setPageNumber}
        currentPage={itemsMeta.currentPage}
        pageCount={itemsMeta.pageCount}
      />
    </MainLayout>
  );
}

export default ItemsPage;
