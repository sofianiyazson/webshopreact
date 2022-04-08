import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { addProduct, emptyCart } from "./cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutFunc = async (dispatch)=>{
  dispatch(logout());
}

export const emptyCartFunc = async(dispatch)=>{
  dispatch(emptyCart())
}


export const cart = async(dispatch,cart)=>{
  try {
    const res = await userRequest.post("/carts", cart);
    await dispatch(addProduct((res.data)));
  } catch (err) {
    console.log(err)
  }

}
