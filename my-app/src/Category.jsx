import { Container, Typography, Box, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import React from "react";
import image from "./images/image.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Category = () => {
  return (
    <Container>
      <Typography variant={"div"} sx={{ fontSize: "40px", color: "#18154B" }}>
        категории товаров
      </Typography>
      <Card
        sx={{
          display:'flex',
          width: "380px",
          height: "170px",
          background: "white",
          boxShadow: "0px 4px 20px rgba(0, 7, 94, 0.1)",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            position:'relative',
            width: "35%",
            height: "100%",
            borderTopRightRadius: "70px",
            borderBottomRightRadius: "70px",
            background: "#1A0B73",
          }}
        >
          <CardMedia
          sx={{
            position:'absolute',
            top: 20,
            left:30 
          }}
            component={"img"}
            alt="img"
            height={130}
            width={140}
            image={image}
          />
        </Box>
        <Box>
        <CardContent>
          <Typography variant='div' sx={{
            width:'60%',
            padding:'30px',
            fontSize:'20px'
          }}>Asic miners оптом</Typography>
        </CardContent>
        <CardActions sx={{position:'relative',right:'-30px', top:'20px'}}>
          <Button endIcon={<ArrowRightAltIcon/>}>В каталог</Button>
        </CardActions>
      </Box>
      </Card>
    </Container>
  );
};

export default Category;
