> [!IMPORTANT]
> ## このリポジトリはアーカイブされます
>
> このリポジトリは **2023 年以降コードの更新がなく**、現在は Dependabot による
> 依存パッケージのセキュリティ更新に対応するだけの状態が続いています。
> 教材としての実質的なメンテナンスが行われていないため、
> **本リポジトリをアーカイブ（読み取り専用化）します。**
>
> - アーカイブ後も、clone / fork / 閲覧は引き続き可能です。
> - Issue・Pull Request の受付は停止します。
> - **依存パッケージには既知の脆弱性が残っています。**
>   利用される場合は、各自で `npm audit` などを実行し、
>   **セキュリティアップデートを適用したうえでご利用ください。**
>
> TDDBC で JavaScript の環境が必要な場合は、メンテナンスが継続されている
> [tddbc/javascript-jest](https://github.com/tddbc/javascript-jest) のご利用を推奨します。

# TDDBC for JavaScript with Node.js

これは、TDDBCのNode.js向けプロジェクトです。

## Documentation

### 動作環境

* Node.js : 8以上

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

> javascript-mocha@0.1.0 pretest /path/to/projects/javascript-mocha
> npm run lint


> javascript-mocha@0.1.0 lint /path/to/projects/javascript-mocha
> eslint 'lib/**' 'test/**'


> javascript-mocha@0.1.0 test /path/to/projects/javascript-mocha
> mocha --require intelli-espower-loader



  Sample
    .status
      ✓ は、trueであるべき
    #say()
      ✓ は、"Hello TDDBC!"が返ってくるべき


  2 passing (9ms)

$
```

### コマンド

| コマンド        | 内容                                                       |
|:----------------|:-----------------------------------------------------------|
| `npm test`      | lint とテストをまとめて行います                            |
| `npm run lint`  | コードの静的検証を行います                                 |
| `npm run watch` | ファイル変更を監視し、変更があったらテストを自動で行います |

## License
Copyright (c) 2013 TDD BaseCamp and other contributors

http://devtesting.jp/tddbc/

https://github.com/tddbc

Licensed under the MIT license.
