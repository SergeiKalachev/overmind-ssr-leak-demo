import { createStateHook } from "overmind-react";
import { namespaced, merge } from "overmind/config";
import * as products from "./products";
import * as brands from "./brands";
import { onInitialize } from "./onInitialize";

export const config = merge(
  namespaced({
    products,
    brands,
  }),
  {
    onInitialize,
  }
);

export const useState = createStateHook();
