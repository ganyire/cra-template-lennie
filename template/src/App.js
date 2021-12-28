import reactLogo from "assets/images/reactLogo.png";
import axiosLogo from "assets/images/axiosLogo.png";
import primereactLogo from "assets/images/primereactLogo.png";
import reactqueryLogo from "assets/images/reactqueryLogo.png";
import reactrouterLogo from "assets/images/reactrouterLogo.png";
import tailwindLogo from "assets/images/tailwindLogo.png";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  const width = 100;
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen container mx-auto px-1 sm:px-8 text-gray-600">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <p className="font-bold text-3xl text-gray-500 underline underline-offset-4 decoration-double line-he decoration-2 decoration-yellow-700">
            cra-template-lennie
          </p>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-xl font-medium">
              <span className="font-bold">Welcome!</span> I am the hottest react starter template in the galaxy
            </h2>
            <p>I'm powered by the following packages by default</p>
          </div>

          <div className="grid grid-cols-3 gap-2 justify-center items-center ">
            <div className="p-3 border border-red-200  rounded-md shadow-sm shadow-emerald-400 animate-slight-rotate text-center flex justify-center">
              <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
                <img src={reactLogo} alt="React" width={width} height={width} />
                React
              </a>
            </div>

            <div className="p-3 border border-red-200 rounded-md shadow-sm shadow-emerald-400 animate-slight-rotate text-center flex justify-center">
              <a href="https://axios-http.com/docs/intro" target="_blank" rel="noreferrer">
                <img src={axiosLogo} alt="Axios Promise based API" width={width} height={width} />
                Axios
              </a>
            </div>

            <div className="p-3 border border-red-200 rounded-md shadow-sm shadow-emerald-400 animate-slight-rotate text-center flex justify-center">
              <a href="https://www.primefaces.org/primereact/setup/" target="_blank" rel="noreferrer">
                <img src={primereactLogo} alt="PrimeFaces component UI library for react" width={width} height={width} />
                PrimeReact
              </a>
            </div>

            <div className="p-3 border border-red-200 rounded-md shadow-sm shadow-emerald-400 animate-slight-rotate text-center flex justify-center">
              <a href="https://react-query.tanstack.com/overview" target="_blank" rel="noreferrer">
                <img src={reactqueryLogo} alt="React query" width={width} height={width} />
                ReactQuery
              </a>
            </div>

            <div className="p-3 border border-red-200  rounded-md shadow-sm shadow-emerald-400 animate-slight-rotate text-center flex justify-center">
              <a href="https://reactrouter.com/docs/en/v6" target="_blank" rel="noreferrer">
                <img src={reactrouterLogo} alt="React router dom" width={width} height={width} />
                React Router Dom
              </a>
            </div>

            <div className="p-3 border border-red-200 rounded-md shadow-sm shadow-emerald-400 animate-slight-rotate text-center flex justify-center">
              <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">
                <img src={tailwindLogo} alt="Tailwind CSS" width={width} height={width} />
                TailwindCSS
              </a>
            </div>
          </div>
        </div>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
