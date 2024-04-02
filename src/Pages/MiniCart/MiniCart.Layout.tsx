//import { useEffect } from "react";
//import { useAuth } from "../../Context/AuthContext";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
//import { getCartItemList } from "./MiniCartSlice";
// What need to do if used ID is undefined.
const MiniCart = () => {
  //const { id } = useAuth();
  // const dispatch = useAppDispatch();
  const { isLoading, data, err } = useAppSelector(
    (state) => state.cartItemList
  );
  // useEffect(() => {
  //   dispatch(getCartItemList({ id }));
  // }, [dispatch, id]);
  console.log("loading", isLoading);
  console.log("data", data);
  console.log("error", err);
  if (isLoading || err) {
    return <p>Please wait!</p>;
  }
  return (
    <div>
      <h1>Cart List</h1>
      {Array.isArray(data?.products) &&
        data?.products.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};

export default MiniCart;
