export const App = () => {
  const arr: number[] = [];
  return (
    <div>
      <h1>Hello World</h1>{" "}
      {arr.map((el) => (
        <h1>{el}</h1>
      ))}
    </div>
  );
};
