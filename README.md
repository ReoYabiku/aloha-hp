# ALOHA HP
学生団体ALOHAのホームページ

# 開発の進め方
## Gitの操作方法
### 新たにブランチを切る
必ず`main`ブランチから、ブランチを切ってください。
```
$ git pull origin main
$ git switch -c <branch name>
```

### 手元での作業を提出する
プッシュしたのち、Githubでプルリクエストを作成してください。
```
$ git add .
$ git commit -m "<commit message>"
$ git push origin <branch name>
```

## Reactの起動方法
ブラウザから`localhost:3000`にアクセスすると、画面が見れるようになります。
```
$ npm start
```