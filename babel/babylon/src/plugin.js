// https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#toc-builders

const ast = {
  type: "BinaryExpression",
  operator: "===",
  left: {
    type: "Identifier",
    name: "foo",
  },
  right: {
    type: "Identifier",
    name: "bar",
  },
};

function plugin({ types: t }) {
  return {
    visitors: {
      Identifier: {
          enter(path, state) {
            //   进入identifier
          },
          exit(path, state) {
            //   退出identifier
          }
      },
      ASTNodeTypeHere(path, state) {},
      BinaryExpression(path) {
        if (path.node.operator !== "===") {
          return;
        }

        path.node.left = t.identifier("sing");
        path.node.right = t.identifier("song");
        // 访问该属性内部的left
        path.get('left')

        // 检查节点类型
        if (t.isIdentifier(path.node.left)) {}
        if (t.isIdentifier(path.node.left, {name: 'n'})) {}
        // 等价于
        if (
            path.node.left != null &&
            path.node.left.type === "Identifier" &&
            path.node.left.name === "n"
        ) {}

        // ...
      },
    },
  };
}

export default plugin;
