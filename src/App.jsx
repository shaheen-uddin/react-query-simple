
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Example from "./components/Example";

const queryClient = new QueryClient();
function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
        <Example />
        <ReactQueryDevtools  />
    </QueryClientProvider>
    </>
  )
}

export default App
