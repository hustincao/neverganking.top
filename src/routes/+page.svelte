<script>
    // import LeftArrow from '../static/angles-left-solid.svg';
    let videos = [];
    let selected_index = 0;
    let next_page_token = "";

    const incrementSelectedIndex = () => (selected_index += 1);
    const decrementSelectedIndex = () => (selected_index -= 1);

    fetch("./videos.json")
        .then((response) => response.json())
        .then((data) => {
            videos = data;
        });
</script>

<div
    class="h-screen w-screen text-gray-200 bg-slate-900 gap-y-5 flex flex-col justify-center items-center"
>
    <h1 class="text-center font-bold text-7xl">Never Gank Top</h1>

    {next_page_token}
    <iframe
        class="max-w-2xl w-full aspect-video"
        src={`https://www.youtube.com/embed/${videos[selected_index]}`}
        title="video"
        frameborder="0"
        allowfullscreen
    />
    <div class="flex flex-row max-w-2xl w-full justify-between">
        <button
        class="flex justify-center items-center w-36 rounded-lg p-2 gap-x-2 font-semibold text-xl bg-teal-600 hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:opacity-50"
        on:click={decrementSelectedIndex}
            disabled={selected_index === 0}
        >
            <img
                class="h-6 w-6"
                src="./angles-left-solid.svg"
                alt="Previous video"
            />
            PREVIOUS
        </button>
        <button
            class="flex justify-center items-center w-36 rounded-lg p-2 gap-x-2 font-semibold text-xl bg-teal-600 hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:opacity-50"
            on:click={incrementSelectedIndex}
            disabled={selected_index === videos.length - 1}
        >
            NEXT
            <img
                class="h-6 w-6 fill-slate-50"
                style="color:#ffffff"
                src="./angles-right-solid.svg"
                alt="Previous video"
            />
        </button>
    </div>
</div>

<style>
</style>
