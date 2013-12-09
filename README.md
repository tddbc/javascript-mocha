# TDDBC for JavaScript with Node.js

これは、TDDBCのNode.js向けプロジェクトです。

## Documentation

### 動作環境

* Node.js : 0.8.0以上

### セットアップ

* プロジェクトをcloneしてください。

```sh
$ git clone https://github.com/tddbc/javascript-mocha.git
```

* npmを利用して、依存関係をダウンロードしてください。

```sh
$ npm install
```

* 下記の様に表示されるか、確認してください。

```sh
$ grunt test
Running "clean:test" (clean) task

Running "espower:test" (espower) task

Running "mochacli:all" (mochacli) task


  Sample
    .status
      ✓ は、trueであるべき
    #say()
      ✓ は、'Hello TDDBC!'が返ってくるべき


  2 passing (8ms)


Done, without errors.
```

## License
Copyright (c) 2013 TDD BaseCamp and other contributors

http://devtesting.jp/tddbc/

https://github.com/tddbc

Licensed under the MIT license.
