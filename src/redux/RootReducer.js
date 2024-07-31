import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {createResetMetaReducer} from '../redux/slices/MetaReducer'



import AddToCard from "./slices/AddToCard";
import AllProduct from "./slices/AllProduct";
import LoginSlices from "./slices/LoginSlices";
import CarousalSlices from "./slices/CarousalSlices";
import userDataSlice from "./slices/UserListSlices"
import SearchProduct from "./slices/SearchProduct";
import SearchDynamicProduct from "./slices/SearchDynamicProduct";
import SortingData from "./slices/SortingData";


const resetSlices=[
   "addtocard",
   "authinfo",
   "allproduct",
   "carousalslice",
   "alluser",
   "searchproduct",
   "SearchDynamicProduct",
   "sortingdata" 
];

const rootReducer=createResetMetaReducer(
    "GLOBAL_RESET",
    resetSlices
)(
    combineReducers({
        addtocard: AddToCard,
        authinfo:LoginSlices,
        allproduct:AllProduct,
        carousalslice:CarousalSlices,
        alluser:userDataSlice,
        searchproduct:SearchProduct,
        SearchDynamicProduct:SearchDynamicProduct,
        sortingdata: SortingData

    })
);

const persistConfig={
    key:"root",
    storage,
    whitelist:resetSlices,
};
export default persistReducer(persistConfig,rootReducer);