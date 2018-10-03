export default ({ todos }) => {
  // debugger
  return (
    Object.keys(todos).map((id) => todos[id])
  );
};

// export default () => {
//   console.log('hi');
// };
