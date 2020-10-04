## memo

#### 指令
- 查看状态: ps aux | grep node

- 服务启动: sudo node server.js &

#### mongoDB
- DB 一覧: show dbs

- 使用 DB 切り替え: use admin

- 現在選択している DB 確認: db.stats()

- ドキュメント 一覧 (全件 検索): db.users.find()

- ドキュメント删除: db.users.remove({'_id':ObjectId("5f70904cafa20c3509540679")})

#### modules下载
- express: npm i express

- body-parser: npm i body-parser

- mongoose: npm i mongoose

- ejs: npm i ejs

