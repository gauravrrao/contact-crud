import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";

import type { RootState,AppDispatch } from "../index";

export const userAppSelector : TypedUseSelectorHook<RootState> = useSelector