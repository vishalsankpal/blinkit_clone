import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { getCategoryProductList } from "./CategoryProductListSlice";
const CategoryProductList = () => {
  const { name } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, data, err } = useAppSelector(
    (state) => state.categoryProductList
  );
  useEffect(() => {
    dispatch(getCategoryProductList({ name }));
  }, [dispatch, name]);
  if (isLoading || err) {
    return <p>Please wait!</p>;
  }
  return (
    <div>
      <h1>Category Product List</h1>
      {Array.isArray(data) &&
        data.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};

export default CategoryProductList;
