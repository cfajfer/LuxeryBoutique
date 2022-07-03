import { PriceCheckRounded } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import ItemCard from "../../itemCard/itemCard";
// import Image from "next/image";
import { ReactElement } from "react";

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

const Body = ({
  products: { purses, shoes, accessories },
}: any): ReactElement => {
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
          marginBottom: "-24px",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{ ...styles.titleText, fontSize: "1.5rem" }}
        >
          {titleList[index]}
        </Typography>
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
      </Grid>,
    );
    product?.forEach((product: any) => {
      const {
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
          }}
        />,
      );
    });
  });

  return (
    <Container maxWidth={false}>
      <Paper variant="elevation" elevation={1} sx={styles.body}>
        <Container maxWidth="lg" sx={{ mt: { xs: "12px", md: "24px" } }}>
          <Grid container spacing={3}>
            {productListJSX[0].slice(0, 4)}
            {productListJSX[1].slice(0, 4)}
            {productListJSX[2].slice(0, 4)}
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
};

export default Body;
