export type Theme = 'light' | 'dark';

// 後續可設定配色主題
export const themes = {
  dark: {
    sidebar: {
      backgroundColor: '#0b2948',
      color: '#8ba1b7', // '#8ba1b7
    },
    headerFooterColor: {
      backgroundColor: '#00203f32',
      color: '#8ba1b7',
    },
    menu: {
      menuContent: '#082440',
      icon: '#a0f4f6',  // sidebar icon color
      hover: {
        backgroundColor: '#00458b',
        color: '#e0d061',
      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  },
  // other themes
};


// 後續用
export const color = {
  // dark
  darkGrayishBlue: '#8b8d94',
  darkRed: '#a90000',
  veryDarkGrayishBlue: '#373a47',

  // light
  lightBlue: '#3751FF',
  lightGrayishBlue: '#F7F8FC',
  lightGrayishBlue2: '#DFE0EB',
  brightBlue: '#3498db',
  paleBlue: '#DDE2FF',
  paleBlueTransparent: 'rgba(220, 222, 255, 0.3)',

  // all white
  white: '#ffffff',

  // gray
  grayishBlue: '#A4A6B3',
  grayishBlue2: '#9fa2b4',
  grayishBlue3: '#bdc3c7',

};
