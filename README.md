# 粵語兒歌

小學生向粵語兒歌列表（React + Vite）。

## 開發（唔好用 Live Server 開根目錄）

呢個係 **Vite + React** 專案，一定要用 Vite 編譯 JSX：

```bash
npm install
npm run dev
```

喺瀏覽器開終端顯示嘅網址，**一定要包埠號**，例如 `http://localhost:5173/` 或 `http://127.0.0.1:5174/`（以終端為準）。  
只打 `127.0.0.1` 唔打 `:5173` 之類 → 連唔到 Vite → **白屏**。

**唔好用** VS Code「Live Server」去開專案 **根目錄** 嘅 `index.html`——佢唔識編譯 `/src/main.jsx`，會 **白屏**。

## 預覽打包後嘅網頁

- 同 GitHub Pages 一樣嘅路徑：`npm run build` 然後 `npm run preview`，再開提示嘅網址（路徑會包倉庫名）。
- 想喺本機用 **相對路徑**（例如用 Live Server 只開 `dist` 資料夾）：

```bash
npm run build:local
npm run preview:local
```

或用任何靜態伺服器指住 `dist/`（用 `build:local` 產出）。

## 部署到 GitHub Pages

**推薦（最穩陣）：** 用 `gh-pages` 分支，只上載建置好嘅 `dist/`，**唔好** 用 `main` / `(root)` 做 Pages（嗰度係未建置嘅 `index.html` + `/src/main.jsx` → 白畫面）。

1. 本機執行：`npm run deploy`（會先 `npm run build` 再推 `dist` 上 `gh-pages` 分支）。
2. 去 **Settings → Pages**：
   - **Source** 揀 **Deploy from a branch**（**唔好用** `main` / root）。
   - **Branch** 揀 **`gh-pages`**，folder 揀 **`/ (root)`**。
   - 撳 **Save**。
3. 等 1–3 分鐘，再開：**https://kennethchan6392-hash.github.io/cantonesekidsong/**

驗證：「顯示網頁原始碼」應見到 `script` 去 **`/cantonesekidsong/assets/...js`**，**唔好** 係 `src="/src/main.jsx"`。

**（可選）** 亦設有 [GitHub Actions 部署](.github/workflows/deploy-github-pages.yml)。若用 branch `gh-pages`，可唔用 Actions 避免兩邊爭。用 Actions 作唯一來源時，**唔好** 同時用 `main` 做 Pages。

`npm run build` 用 `vite.config.js` 嘅 `GH_PAGES_BASE`（要同倉庫名 `cantonesekidsong` 一致）；本機預覽用 `build:local`。
