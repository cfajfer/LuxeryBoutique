import type { NextPage } from "next";
import client from "../../apollo-client";
import Head from "next/head";
import ActionCall from "../../components/homepage/actionCall";
import Body from "../../components/homepage/layout/body";
import Layout from "../../components/layout/layout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  allProducts,
  purseFilter,
  shoeFilter,
  accessoryFilter,
  sortDesc,
} from "../../queries";
import { Grid, Typography, Button } from "@mui/material";
import ItemCard from "../../components/itemCard/itemCard";

const styles = {
  body: {
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minWidth: "0px",
    overflowWrap: "break-word",
    backgroundClip: "border-box",
    border: "0px solid rgba(0, 0, 0, 0.125)",
    borderRadius: "0.75rem",
    overflow: "visible",
    padding: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "saturate(200%) blur(30px)",
    boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
    marginBottom: { xs: "32px", md: "32px" },
    marginTop: { xs: "-32px", md: "-64px" },
  },
  titleText: {
    margin: "0px",
    fontSize: "1.25rem",
    lineHeight: 1.375,
    display: "inline",
    opacity: 1,
    textTransform: "none",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(52, 71, 103)",
    letterSpacing: "-0.125px",
    fontWeight: 700,
  },
};

const Category: NextPage = ({ products, category }: any) => {
  const productListJSX: JSX.Element[] = [];

  products?.forEach((product: any) => {
    const {
      id,
      attributes: {
        Price,
        ProductName,
        Description,
        designer: {
          data: {
            attributes: { Designer },
          },
        },
        product_type: {
          data: {
            attributes: { ProductType },
          },
        },
        Images: { data: imageDataArr },
      },
    } = product;

    const {
      attributes: { url: coverImage },
    } = imageDataArr[0];

    productListJSX.push(
      <ItemCard
        props={{
          Price,
          ProductName,
          Description,
          Designer,
          ProductType,
          coverImage,
          id,
          isHomepage: false,
        }}
      />,
    );
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Layout>
        <ActionCall title={category} productNum={products.length} />
        <Body
          children={
            <Grid container spacing={3}>
              {productListJSX}
            </Grid>
          }
        />
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { category } = context.query;

  const filterMap: any = {
    handbags: purseFilter,
    shoes: shoeFilter,
    accessories: accessoryFilter,
  };

  const { data } = await client.query({
    query: allProducts(filterMap[category] ?? "", sortDesc),
  });

  return {
    props: {
      products: data.products.data,
      category,
    },
  };
};

export default Category;
