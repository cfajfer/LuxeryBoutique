import { Description } from "@mui/icons-material";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";

const styles = {
  gridPaper: {
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minWidth: "0px",
    overflowWrap: "break-word",
    backgroundColor: "rgb(255, 255, 255)",
    backgroundClip: "border-box",
    border: "0px solid rgba(0, 0, 0, 0.125)",
    borderRadius: "0.75rem",
    boxShadow:
      "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
    overflow: "visible",
  },
  itemImage: {
    position: "relative",
    opacity: 1,
    background: "white",
    color: "rgb(52, 71, 103)",
    borderRadius: "0.5rem",
    boxShadow: "none",
    height: "100%",
    overflow: "hidden",
  },
  itemBox: {
    marginTop: "24px",
    opacity: 1,
    background: "transparent",
    color: "rgb(52, 71, 103)",
    boxShadow: "none",
  },
  imageBlur: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "0px",
    top: "0px",
    opacity: 1,
    color: "rgb(52, 71, 103)",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
    transform: "scale(0.94)",
    filter: "blur(12px)",
    background:
      "url(https://cf.ltkcdn.net/handbags/images/orig/201050-1698x1130-louisvuitton.jpg) 0% 0% / cover transparent",
    borderRadius: "0.5rem",
  },
  textBox: {
    padding: { sm: "0px", md: "64px" },
    marginTop: "-16px",
    opacity: 1,
    background: "transparent",
    color: "rgb(52, 71, 103)",
    boxShadow: "none",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  metaTextPrice: {
    margin: "0px 0px 10px 0px",
    fontSize: "1.5rem",
    lineHeight: 1,
    display: "block",
    opacity: 1,
    textTransform: "none",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(52, 71, 103)",
    letterSpacing: "-0.125px",
    fontWeight: 700,
  },
  metaText: {
    marginLeft: "auto",
    fontSize: "1rem",
    lineHeight: 1.5,
    display: "block",
    opacity: 1,
    textTransform: "none",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(123, 128, 154)",
    letterSpacing: "-0.125px",
    fontWeight: 400,
  },
  titleText: {
    margin: "0px",
    fontSize: "2rem",
    lineHeight: 1.5,
    display: "inline",
    opacity: 1,
    textTransform: "none",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(52, 71, 103)",
    letterSpacing: "-0.125px",
    fontWeight: 700,
  },
  descriptionbox: {
    marginTop: "8px",
    marginBottom: "24px",
    opacity: 1,
    background: "transparent",
    color: "rgb(52, 71, 103)",
    boxShadow: "none",
  },
  descriptionText: {
    margin: "0px",
    marginTop: "32px",
    fontSize: "1rem",
    fontWeight: 300,
    lineHeight: 1.6,
    opacity: 1,
    textTransform: "none",
    verticalAlign: "unset",
    textDecoration: "none",
    color: " rgb(123, 128, 154)",
    letterSpacing: "-0.125px",
  },
};

const ProductPage: any = ({
  props: { Price, ProductName, Description, Designer, ProductType, images, id },
}: any): JSX.Element => {
  return (
    <>
      <Grid item xs={12} md={6} sx={{ height: "100%" }}>
        <Box sx={styles.itemImage}>
          <Carousel
            autoPlay={false}
            animation="slide"
            navButtonsAlwaysInvisible
            sx={{ display: "contents" }}
            indicatorContainerProps={{
              style: {
                marginTop: "10px",
              },
            }}
          >
            {images.map((image: any) => (
              <img
                src={image}
                width="100%"
                height="220px"
                style={{
                  objectFit: "contain",
                  position: "relative",
                  height: "auto",
                  zIndex: 1,
                  opacity: 1,
                  background: "white",
                  color: "rgb(52, 71, 103)",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
                }}
              />
            ))}
          </Carousel>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={styles.textBox}>
          <Box>
            <Typography variant="h3" component="h1" sx={styles.titleText}>
              {ProductName}
            </Typography>
            <Typography variant="h5" component="h2" sx={styles.metaTextPrice}>
              ${Price}
            </Typography>
            <hr style={{ border: "1px solid #37476526" }} />
            <Typography
              variant="h5"
              component="h2"
              sx={{
                ...styles.titleText,
                fontSize: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              Designer
              <Typography
                variant="button"
                component="span"
                sx={styles.metaText}
              >
                {Designer}
              </Typography>
            </Typography>
            <hr style={{ border: "1px solid #37476526" }} />
            <Typography
              variant="h5"
              component="h2"
              sx={{
                ...styles.titleText,
                fontSize: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              Product Type
              <Typography
                variant="button"
                component="span"
                sx={styles.metaText}
              >
                {ProductType}
              </Typography>
            </Typography>
            <hr style={{ border: "1px solid #37476526" }} />
          </Box>
          <Box
            sx={{
              ...styles.descriptionbox,
              display: "flex",
            }}
          >
            <Typography
              variant="body2"
              component="p"
              sx={styles.descriptionText}
            >
              {Description}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default ProductPage;
