import { Box, Container, Grid, Paper } from "@mui/material";
import Image from "next/image";
import { ReactElement } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import body from "../../../styles/body.module.scss";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Body: React.FC = ({ products }: any): ReactElement => {
  // eslint-disable-next-line no-console
  console.log(products);

  return (
    <Container maxWidth="xl">
      <Paper variant="elevation" elevation={1} className={body.Body}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Paper variant="elevation" elevation={1}>
              <Box>
                <Image
                  src="/images/action-call.png"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        products {
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
            }
          }
        }
      }
    `,
  });

  // eslint-disable-next-line no-console
  console.log(data);

  return {
    props: {
      products: data,
    },
  };
}

export default Body;
