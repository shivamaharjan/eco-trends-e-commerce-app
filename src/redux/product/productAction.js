import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { toast } from "react-toastify"
import { db } from "../../config/firebase-config";
import { setProductList } from "./productSlice";

export const getAllProductAction = () => async (dispatch) => {
  try {
    const querySnapShot = await getDocs(collection(db, "product"));
    const productList = [];
    querySnapShot.forEach((doc) => {
      const slug = doc.id;
      const data = doc.data();
      productList.push({
        ...data,
        slug,
      });
    });
    dispatch(setProductList(productList));
  } catch (e) {
    console.log(e);
    toast.error(`Something went wrong ${e.message}`);
  }
};