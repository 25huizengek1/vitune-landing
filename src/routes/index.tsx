import { Spacer } from "~/components/Spacer";
import { FaBrandsGithub as FaBrandsGitHub } from "solid-icons/fa";

export default function Home() {
    return (
        <main class="text-white text-center py-5 px-2 size-full">
            <h1 class="text-3xl font-extrabold font-sans">ViTune landing page - WIP</h1>
            <Spacer type="small" />
            <h1 class="text-md font-semibold text-gray-500">
                This is going to be the landing page for ViTune. For now, you should have a look at our
            </h1>
            <a href="https://github.com/25huizengek1/ViTune" class="inline font-extrabold font-sans text-xl flex flex-row justify-center">
                <FaBrandsGitHub class="my-auto mr-2" /> GitHub
            </a>
        </main>
    );
}
