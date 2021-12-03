module.exports = function ({ types: t }) {
  return {
    visitor: {
      Identifier: {
        enter(path, state) {
          path.node.name = 'x'
        },
        exit(path, state) {
          console.log(state)
          console.log('exit')
        }
      },
    },
  };
};
