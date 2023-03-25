# Client

## 開發

### 安裝和啟動

安裝 package

```bash
npm i
```

啟動：

```bash
npm run dev
```

### 資料夾結構

```
src/
├── model
├── assets
├── config
├── tools
└── web
```

- model: 當有 component 可以跨分頁使用可以放在此，用資料夾區分。
- assets：一些資源的存放的地方，像是圖案、符號或圖標。通常是全域的資源會放在這層。
- config：全域的系統參數會放在這裡，像是系統設定和語言切換表。
- tools:當你寫一個 function 可以跨頁面使用時可以放在此。
- web: 頁面，用資料夾區分各個分頁。

### 程式排版

通常會建議使用同一個套件，我是用 vs-code Prettier 這個 extension，可以設定存檔時自動排版。
