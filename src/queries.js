import { gql } from "@apollo/client";

export const allProducts = (filter = "", sort = "") => gql`
  query {
    products ${filter || sort ? `(${filter} ${sort})` : ""} {
      data {
        attributes {
          Price
          ProductName
          Description
          designer {
            data {
              attributes {
                Designer
              }
            }
          }
          product_type {
            data {
              attributes {
                ProductType
              }
            }
          }
          product_categories {
            data {
              attributes {
                ProductCategory
              }
            }
          }
          Images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const purseFilter =
  'filters: { product_type: { ProductType: { eq: "Handbag" } } },';

export const shoeFilter =
  'filters: { product_type: { ProductType: { eq: "Shoes" } } },';

export const accessoryFilter =
  'filters: { product_type: { ProductType: { eq: "Accessories" } } },';

export const sortDesc = 'sort: "id:DESC",';
