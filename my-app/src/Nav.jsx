import { Box, Button, Typography, Container } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Nav = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 20px rgba(0, 7, 94, 0.1)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant={"p"}
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            color: "#18154B",
          }}
        >
          MEIN MINER
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            variant="a"
            sx={{ marginRight: "50px", color: "#303239" }}
          >
            Каталог товаров
          </Typography>
          <Typography
            variant="a"
            sx={{ marginRight: "50px", color: "#303239" }}
          >
            Цены
          </Typography>
          <Typography
            variant="a"
            sx={{ marginRight: "50px", color: "#303239" }}
          >
            Калькулятор
          </Typography>
          <Typography
            variant="a"
            sx={{ marginRight: "50px", color: "#303239" }}
          >
            Доставка
          </Typography>
          <Typography variant="a" sx={{ color: "#303239" }}>
            Отзывы
          </Typography>
        </Box>
        <Button>Заказать звонок</Button>
        <Box>
          <SearchIcon sx={{ marginRight: "15px" }} />
          <FavoriteBorderIcon sx={{ marginRight: "15px" }} />
          <ShoppingCartOutlinedIcon />
        </Box>
      </Container>
    </Box>
  );
};

export default Nav;
