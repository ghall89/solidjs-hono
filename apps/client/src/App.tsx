import { createResource, Match, Switch } from "solid-js";

import Loader from "./components/loader";

const fetchMessage = async () => {
  const response = await fetch(`http://localhost:3000/`);

  return response.text();
};

function App() {
  const [msg] = createResource<string>(fetchMessage);

  return (
    <div class="p-4 max-w-2xl mx-auto">
      <Loader isLoading={msg.loading} />
      <Switch>
        <Match when={msg.error}>
          <span>Error: {msg.error}</span>
        </Match>
        <Match when={msg()}>
          <div>{msg()}</div>
        </Match>
      </Switch>
    </div>
  );
}

export default App;
