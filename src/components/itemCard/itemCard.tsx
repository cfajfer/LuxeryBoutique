import { Description } from "@mui/icons-material";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import Link from "next/link";

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
    marginLeft: { xs: "5px", md: "16px" },
    marginRight: { xs: "5px", md: "16px" },
    marginTop: "-24px",
    opacity: 1,
    background: "white",
    color: "rgb(52, 71, 103)",
    borderRadius: "0.5rem",
    boxShadow: "none",
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
    padding: { xs: "24px 10px 0px 10px", md: "24px" },
    marginTop: "-16px",
    opacity: 1,
    background: "transparent",
    color: "rgb(52, 71, 103)",
    boxShadow: "none",
    minHeight: { xs: "90px", md: "270px" },
    display: { xs: "flex", md: "block" },
    flexDirection: { xs: "column" },
    justifyContent: { xs: "space-between" },
  },
  metaText: {
    margin: "0px 0px 6px",
    fontSize: "0.875rem",
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
    fontSize: { xs: "1rem", md: "1.25rem" },
    lineHeight: 1.15,
    opacity: 1,
    textTransform: "none",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(52, 71, 103)",
    letterSpacing: "-0.125px",
    fontWeight: 700,
    display: "-webkit-box",
    ["-webkitLineClamp"]: "2",
    ["-webkitBoxOrient"]: "vertical",
    overflow: "hidden",
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
    fontSize: "1rem",
    fontWeight: 300,
    lineHeight: 1.6,
    opacity: 1,
    textTransform: "none",
    verticalAlign: "unset",
    textDecoration: "none",
    color: " rgb(123, 128, 154)",
    letterSpacing: "-0.125px",
    display: "-webkit-box",
    ["-webkitLineClamp"]: "4",
    ["-webkitBoxOrient"]: "vertical",
    overflow: "hidden",
  },
};

const ItemCard: any = ({
  props: {
    Price,
    ProductName,
    Description,
    Designer,
    ProductType,
    coverImage,
    id,
    isHomepage = true,
  },
}: any): JSX.Element => {
  return (
    <Grid item xs={isHomepage ? 12 : 6} md={6} lg={4}>
      <Box sx={styles.itemBox}>
        <Paper variant="elevation" elevation={1} sx={styles.gridPaper}>
          <Box
            sx={{ ...styles.itemImage, display: { xs: "block", md: "none" } }}
          >
            <Link href={`/product/${id}`}>
              <img
                src={coverImage}
                width="100%"
                height={isHomepage ? "220px" : "auto"}
                style={{
                  maxHeight: isHomepage ? "220px" : "100px",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                  opacity: 1,
                  background: "white",
                  color: "rgb(52, 71, 103)",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
                }}
              />
            </Link>
            {/* <Box sx={styles.imageBlur} /> */}
          </Box>
          <Box
            sx={{
              ...styles.itemImage,
              display: { xs: "none", md: "block" },
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                cursor: "pointer",
                filter: "brightness(.975)",
              },
            }}
          >
            <Link href={`/product/${id}`}>
              <img
                src={coverImage}
                width="100%"
                height={"220px"}
                style={{
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                  opacity: 1,
                  background: "white",
                  color: "rgb(52, 71, 103)",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
                }}
              />
            </Link>
            {/* <Box sx={styles.imageBlur} /> */}
          </Box>
          <Box sx={styles.textBox}>
            <Typography
              variant="button"
              component="span"
              sx={{ ...styles.metaText, display: { xs: "none", md: "block" } }}
            >
              <b>${Price}</b> • {Designer} • {ProductType}
            </Typography>
            <Typography variant="h5" component="h5" sx={styles.titleText}>
              {ProductName}
            </Typography>
            <Typography
              variant="button"
              component="span"
              sx={{ ...styles.metaText, display: { xs: "block", md: "none" } }}
            >
              <b>${Price}</b>
            </Typography>
            <Box>
              <Box
                sx={{
                  ...styles.descriptionbox,
                  display: { xs: "none", md: "flex" },
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

              <Link href={`/product/${id}`}>
                <Button
                  sx={{
                    border: "1px solid",
                    borderRadius: "0.5rem",
                    padding: "5px 10px",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  View Product
                </Button>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default ItemCard;
