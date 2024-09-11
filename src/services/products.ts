import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../interfaces/IProduct";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Array<IProduct>, void>({
      query: () => "products",
    }),
    getProductsById: builder.query<IProduct, number>({
      query: (id) => `products/${id}`,
    }),
    getProductCategories: builder.query<Array<string>, void>({
      query: () => `products/categories`,
    }),
    getCategoryProducts: builder.query<Array<IProduct>, string>({
      query: (category) => `products/category/${category}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useGetProductCategoriesQuery,
  useGetCategoryProductsQuery,
} = productApi;
