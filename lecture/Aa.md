### 数据类型

- `let`与`const` `变量`与`常量`
- Data Types 数据类型
  1. `string` 字符串
     - `' '`或`" "`
     - ```[js]
       "a" + "b" = "ab";
       "a" + b = "ab";
       "a"*1 + b = a+b ;
       ```
     - ```[js]
       `a`; // 模板字符串（Template literals）
       let myString1 = "Hello";
       let myString2 = "World";

       `${myString1} ${myString2}!`; // Hello World!
       `${myString1}, ${myString2}!`; // Hello, World!
        // ${}内可以是任意可能是字符串的变量
       ```
     - 模板字符串会保留换行，普通字符串需\n换行
       ```[js]
       const str = "Hello, 
       world!"; // ❌ 语法错误

       const str = "Hello,\nworld!"; // ✅ 正确

       const str = `Hello, 
       world!`; // ✅ 模版字符串会保留换行
       ```
  2. `number`
  3. `bigint` BigInt 超大整数
     - 不可和number直接运算
  4. `boolean` 布尔值
     `true` or `false`
  5. `undefined`
  6. `symbol` "唯一标识符"
  ```[js]
  const sym1 = Symbol("foo");
  const sym2 = Symbol("foo");
  console.log(sym1 === sym2); // 输出：false
  ```

- 数据类型转换
  - ```[js] 
    BigInt(977)
    Number(977)
    String(977)
    Number("977")
    ```

### 函数

