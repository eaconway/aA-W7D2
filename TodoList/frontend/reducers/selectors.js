export default (state) => {
  debugger
  return (
    Object.keys(state).map((id) => state[id])
  );
};

// export default () => {
//   console.log('hi');
// };
