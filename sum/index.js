'use strict'

/**
 * npm パッケージを作ってみよう
 * 数値を足し合わせる sum ライブラリの作成
 */

/**
 * 数列の配列を受け取って、その要素の合計を返す関数
 */

function add (numbers) {
  let result = 0;
  for(const num of numbers) {
    result = result + num;
  }
  return result;
}

module.exports = {
  add: add
};

/**
 * npm に限らず、特定の関数をモジュールとしてファイルの外部から使えるようにするには、使えるようにしたい関数やオブジェクトを module.exports に代入する
 * 
 * functionのadd関数はsumディレクトリの外で実行するためにmodule.exportsに入れる。
 */

/**
 * 
 */
