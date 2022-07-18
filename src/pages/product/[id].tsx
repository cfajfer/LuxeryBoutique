import { NextPage } from "next";
import Head from "next/head";
import ActionCall from "../../components/homepage/actionCall";
import Body from "../../components/homepage/layout/body";
import Layout from "../../components/layout/layout";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import client from "../../apollo-client";
import { allProducts } from "../../queries";
import ProductPage from "../../components/productPage/productPage";
import { Grid } from "@mui/material";

const Product: NextPage = ({ product }: any) => {
  const [
    {
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
    },
  ] = product;

  const images = imageDataArr.map((image: any) => {
    return image?.attributes?.url;
  });

  return (
    <>
      <Head>
        <title>Luxury Boutique</title>
        <meta name="description" content="Shop your alternative luxury style" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Layout>
        <ActionCall />
        <Body
          children={
            <Grid container spacing={6}>
              <ProductPage
                props={{
                  Price,
                  ProductName,
                  Description,
                  Designer,
                  ProductType,
                  images,
                  id,
                }}
              />
            </Grid>
          }
        />
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;

  const { data } = await client.query({
    query: allProducts(`filters: {id: {eq: ${id}}},`),
  });

  return {
    props: {
      product: data.products.data,
    },
  };
};

export default Product;
