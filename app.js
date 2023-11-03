'use strict';
const axios = require('axios'); //axiosというライブラリを取得
axios.get('https://www.google.com').then(res => { 
  console.log(res.data);
})

/**
 * axiosはオブジェクトで、getというメソッドを持っている。
 * getメソッドに対してHTTPリクエストを送るURLを渡し、
 * それにそのthenメソッドに対してHTTPレスポンスを受け取った際に実行する無名関数を渡す
 * 
 * ライブラリ、パッケージを管理しているサイト
 * npm（標準）,yarn(非公式、npmで公開されているライブラリを高速DL)> nodejs
 * composer > PHP
 * 
 * 
 * package.json
 * 使用しているパッケージ、ライブラリを記載している > axios(JavaScriptでHTMの要素を取ることができる = curlコマンドみたいなライブラリ)
 * 
 * node_modules
 * > axiosを構成しているファイルが見れる
 */