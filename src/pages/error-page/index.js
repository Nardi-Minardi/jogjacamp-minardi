import { useRouteError } from "react-router-dom";

const Index = () => {
  const error = useRouteError();

  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Index;