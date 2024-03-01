import { A } from "@solidjs/router";

export default function NotFound() {
    return (
        <main class="text-white text-center mx-auto p-4">
            <h1 class="text-4xl">Not Found</h1>
            <p class="my-4">
                <A href="/" class="text-sky-600 hover:underline">Home</A>
            </p>
        </main>
    );
}
