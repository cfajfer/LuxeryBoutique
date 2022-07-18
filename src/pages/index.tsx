import type { NextPage } from "next";
import client from "../apollo-client";
import Head from "next/head";
import ActionCall from "../components/homepage/actionCall";
import Body from "../components/homepage/layout/body";
import Layout from "../components/layout/layout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  allProducts,
  purseFilter,
  shoeFilter,
  accessoryFilter,
  sortDesc,
} from "../queries";
import { Grid, Typography, Button } from "@mui/material";
import ItemCard from "../components/itemCard/itemCard";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";

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

const Home: NextPage = ({ purses, shoes, accessories }: any) => {
  const productList = [purses, shoes, accessories];
  const titleList = ["Handbags", "Shoes", "Accessories"];
  const productListJSX: JSX.Element[][] = [[], [], []];

  productList.forEach((product: any, index: number) => {
    productListJSX[index].push(
      <Grid
        item
        xs={12}
        lg={12}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: { xs: "0px", md: "-24px" },
          marginTop: { xs: "0px" },
          paddingTop: { xs: "0px!important" },
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{ ...styles.titleText, fontSize: "1.5rem" }}
        >
          {titleList[index]}
        </Typography>
        <Link href={`/category/${titleList[index].toLowerCase()}`}>
          <Typography variant="h5" component="h5" sx={{ display: "inline" }}>
            <Button
              sx={{
                fontSize: "1.2rem",
                opacity: 1,
                textTransform: "none",
                verticalAlign: "unset",
                textDecoration: "none",
                letterSpacing: "-0.125px",
                fontWeight: 500,
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                Shop All <ArrowForwardIosIcon sx={{ height: "1.2rem" }} />
              </span>
            </Button>
          </Typography>
        </Link>
      </Grid>,
    );
    product?.forEach((product: any) => {
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

      productListJSX[index].push(
        <ItemCard
          props={{
            Price,
            ProductName,
            Description,
            Designer,
            ProductType,
            coverImage,
            id,
          }}
        />,
      );
    });
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
            <>
              <Grid
                container
                spacing={3}
                sx={{
                  display: { xs: "flex", md: "none" },
                  overflow: "hidden",
                  margin: "0",
                  width: "100%",
                }}
              >
                {productListJSX[0][0]}
                <Carousel
                  autoPlay={false}
                  animation="slide"
                  navButtonsAlwaysInvisible
                  sx={{ display: "contents" }}
                  indicatorContainerProps={{
                    style: {
                      marginTop: "25px",
                    },
                  }}
                >
                  {productListJSX[0].slice(1, 4)}
                </Carousel>
                {productListJSX[1][0]}
                <Carousel
                  autoPlay={false}
                  animation="slide"
                  navButtonsAlwaysInvisible
                  sx={{ display: "contents" }}
                  indicatorContainerProps={{
                    style: {
                      marginTop: "25px",
                    },
                  }}
                >
                  {productListJSX[1].slice(1, 4)}
                </Carousel>
                {productListJSX[2][0]}
                <Carousel
                  autoPlay={false}
                  animation="slide"
                  navButtonsAlwaysInvisible
                  sx={{ display: "contents" }}
                  indicatorContainerProps={{
                    style: {
                      marginTop: "25px",
                    },
                  }}
                >
                  {productListJSX[2].slice(1, 4)}
                </Carousel>
              </Grid>
              <Grid
                container
                spacing={3}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {productListJSX[0]}
                {productListJSX[1]}
                {productListJSX[2]}
              </Grid>
            </>
          }
        />
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const filterArr = [purseFilter, shoeFilter, accessoryFilter];

  const promiseArr = filterArr.map((filter: any) =>
    client.query({
      query: allProducts(filter, sortDesc),
    }),
  );

  const [{ data: purseData }, { data: shoeData }, { data: accessoryData }] =
    await Promise.all(promiseArr);

  return {
    props: {
      purses: purseData.products.data.slice(0, 3),
      shoes: shoeData.products.data.slice(0, 3),
      accessories: accessoryData.products.data.slice(0, 3),
    },
  };
};

export default Home;
