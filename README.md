# TDDBC for JavaScript with Node.js

これは、TDDBCのNode.js向けプロジェクトです。

## Documentation

### 動作環境

* Node.js : 0.10.0以上

### セットアップ

* まずはじめに、プロジェクトをcloneしてください。

```sh
$ git clone https://github.com/tddbc/javascript-mocha.git
```

* 次に、依存関係をダウンロードしてください。

```sh
$ npm install
```

* 最後に、下記の様に表示されるか、確認してください。

```sh
$ npm test

> javascript-mocha@0.1.0 test /path/to/projects/javascript-mocha
> npm run lint && mocha --require intelli-espower-loader


> javascript-mocha@0.1.0 lint /path/to/projects/javascript-mocha
> jshint lib test



  Sample
    .status
      ✓ は、trueであるべき
    #say()
      ✓ は、'Hello TDDBC!'が返ってくるべき


  2 passing (5ms)

$ 
```

## License
Copyright (c) 2013 TDD BaseCamp and other contributors

http://devtesting.jp/tddbc/

https://github.com/tddbc

Licensed under the MIT license.
