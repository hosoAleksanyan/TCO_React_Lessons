export const Main = ({ list }) => {
  return (
    <div>
      {list?.map((i) => (
        <div key={i.id}>
            {i.name}
        </div>
      ))}
    </div>
  );
};
