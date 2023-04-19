import { CSSObject } from '@emotion/styled';


// Sidebar相關類型定義

export interface MenuStylesParams {
  isSubmenu: boolean;
  disabled: boolean;
  level: number;
  active: boolean;
  open?: boolean;
}

// => CSSObject：
// 一個代表 CSS 屬性和值的物件，它使用駝峰式命名法（camelCase）來表示 CSS 屬性
// 這個物件可以直接傳遞給 styled-components 或 emotion 這類 CSS-in-JS 函數庫，以生成樣式
export type EleStyles = CSSObject | ((params: MenuStylesParams) => CSSObject | undefined);


export interface SideBarMenuStyles {
  root?: EleStyles;
  icon?: EleStyles;
  prefix?: EleStyles;
  suffix?: EleStyles;
  subMenuContent?: EleStyles;
  SubMenuExpandIcon?: EleStyles;
  button?: EleStyles;
  label?: EleStyles;
}


/*
styled 範例 (臉辨案使用)

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const MyButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#007bff',
  border: '1px solid #007bff',
  borderRadius: 4,
  padding: '8px 16px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
  },

  '&:disabled': {
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
    cursor: 'not-allowed',
  },
}));

function App() {
  return (
    <div>
      <MyButton>Click me</MyButton>
    </div>
  );
}



*/

/*
emotion 範例

import { css } from '@emotion/react';

const buttonStyles = css`
  color: #fff;
  background-color: #007bff;
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }

  &:disabled {
    background-color: #6c757d;
    border-color: #6c757d;
    cursor: not-allowed;
  }
`;

function MyButton(props) {
  return (
    <button css={buttonStyles} {...props}>
      {props.children}
    </button>
  );
}
*/