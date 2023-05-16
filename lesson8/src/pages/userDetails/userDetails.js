import { useParams } from "react-router";

export const UserDetails = () => {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <h1>UserDetails</h1>
    </div>
  );
};
