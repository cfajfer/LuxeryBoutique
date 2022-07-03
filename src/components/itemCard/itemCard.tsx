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
    marginLeft: "16px",
    marginRight: "16px",
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
    padding: "24px",
    marginTop: "-16px",
    opacity: 1,
    background: "transparent",
    color: "rgb(52, 71, 103)",
    boxShadow: "none",
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
  },
}: any): JSX.Element => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box sx={styles.itemBox}>
        <Paper variant="elevation" elevation={1} sx={styles.gridPaper}>
          <Box sx={styles.itemImage}>
            <img
              src={coverImage}
              width="100%"
              height="220px"
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
            <Box sx={styles.imageBlur} />
          </Box>
          <Box sx={styles.textBox}>
            <Typography variant="button" component="span" sx={styles.metaText}>
              <b>${Price}</b> • {Designer} • {ProductType}
            </Typography>
            <Typography variant="h5" component="h5" sx={styles.titleText}>
              {ProductName}
            </Typography>
            <Box sx={styles.descriptionbox}>
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
                }}
              >
                View Product
              </Button>
            </Link>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default ItemCard;
