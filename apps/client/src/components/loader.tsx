import { Show } from "solid-js";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader(props: LoaderProps) {
  const isLoading = () => props.isLoading;

  return (
    <Show when={isLoading()}>
      <div class="bg-black/50 absolute w-screen h-screen top-0 left-0 flex justify-center">
        <span class="loading loading-spinner loading-xl" />
      </div>
    </Show>
  );
}
