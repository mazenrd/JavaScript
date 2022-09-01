import DataFetching from "./DataFetchingWidthQuery";

import { QueryClientProvider, QueryClient } from "react-query";

import "./styles.css";
const QueryCLient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={QueryCLient}>
      <DataFetching />
    </QueryClientProvider>
  );
};
export default App;
