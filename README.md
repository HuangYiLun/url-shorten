# 短網址產生器

## 介紹
將原始網址縮短，並能使用短網址轉址原始網址


### 功能
- 輸入原始網址後，點擊shorten按鈕可縮短網址
- 點擊copy按鈕可複製短網址
- 在伺服器啟動期間，在瀏覽器的網址列，輸入提供的短網址，可以轉址至原始網址



## 開始使用
1. 將專案clone至本機
 ```bash
 git clone https://github.com/HuangYiLun/url-shortener.git
 ```
2. 開啟終端機進入資料夾
3. 安裝npm，輸入：
```bash
 npm install
```
4. 安裝完，繼續輸入：
```bash
npm run dev
```
5. 顯示下列資訊代表成功運行，開啟瀏覽器輸入網址http://localhost:3000
```bash
App is running on th http://localhost:3000
```
6. 結束時，請於終端機輸入：
```bash
ctril + c
```

## 開發工具

- Node.js 14.16.0
- Express 4.18.2
- Express-Handlebars 6.0.6
- Bootstrap 5.3.0
- MongoDB
- mongoose 7.0.3