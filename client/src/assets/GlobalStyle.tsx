import { createTheme } from "@mui/material/styles";
import { blue, green, purple } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#5f5f60 #2b2b2b",
          // 使用的是 WebKit 的前綴，因為這些樣式只適用於 WebKit 瀏覽器，例如 Chrome 和 Safari
          // 使用 &::-webkit-scrollbar 和 & *::-webkit-scrollbar 屬性來定義各種捲軸的樣式
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "rgb(61, 61, 63)",
            width: "0.7em"
          },
          // 使用 &::-webkit-scrollbar-thumb 和 & *::-webkit-scrollbar-thumb 屬性定義捲軸的thumb樣式，
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#6b6b6b",
            minHeight: 24,
            border: "3px solid #2b2b2b",
            "&:focus, &:active, &:hover": {
              backgroundColor: "#959595"
            }
          },
          // 使用 &::-webkit-scrollbar-corner 和 & *::-webkit-scrollbar-corner 屬性定義scrollbar角落的背景色
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b"
          }
        }
      }
    }
  },
  palette: {
    primary: {
      main: blue[500],
      600: blue[600],
      700: blue[700],
      800: blue[800],
      900: blue[900],
      A100: blue.A100,
      A200: blue.A200,
      light: "#e0e7fa", // 側邊攔底色
      dark: "#102530"
    },
    secondary: {
      main: purple[500],
      // sidebar 字體顏色
      light: "#323334",
      dark: "#d0d5d9"
    },
    success: {
      main: green[300],
      light: "#505152",
      dark: "#f2f5f8"
    },
    info: {
      main: blue[100],
      // navbar
      light: "#e0e7fa",
      dark: "#102530"
    },
    common: {
      black: "#000",
      white: "#fff"
    }
  }
});

export default theme;





/*

使用 createTheme() 定義theme後,所有組件都可使用這主題定義的樣式

使用 theme 方式:
假設已經透過 export const theme = createTheme({...}) 

(1) ThemeProvider 將theme應用到整個程式中
    import { ThemeProvider } from "@mui/material/styles";
    import { theme } from "./theme";

    function App() {
      return (
        <ThemeProvider theme={theme}>
          <SomeComponents>
        </ThemeProvider>
      );
    }

(2) 在 MUI 組件中使用 sx 屬性, 將theme樣式應用到特定component
    import { Button } from "@mui/material";

    function MyButton() {
      return (
        <Button sx={{ color: "primary.main", fontSize: 16 }}>按鈕文字</Button>
      );
    }

(3) 在自定義component中使用 styled
    import { styled } from "@mui/material/styles";

    const MyStyledButton = styled(Button)({
      color: (props) => props.theme.palette.primary.main,
      fontSize: 16,
    });

    function MyButton() {
      return <MyStyledButton>按鈕文字</MyStyledButton>;
    }

*/