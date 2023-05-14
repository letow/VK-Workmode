window.addEventListener("load", () => {
    const turnOn = () => {
        const news = document.getElementById("l_nwsf");
        const photo = document.getElementById("l_ph");
        const audio = document.getElementById("l_aud");
        const video = document.getElementById("l_vid");
        const clips = document.getElementById("l_svd");
        const games = document.getElementById("l_ap");
        const mini_apps = document.getElementById("l_mini_apps");
        const favs = document.getElementById("l_fav");
        const audioplayer = document.getElementById("top_audio_player");
        const notif = document.getElementById("top_notify_btn");

        const array = [
            news,
            photo,
            audio,
            video,
            clips,
            games,
            mini_apps,
            favs,
            audioplayer,
            notif,
        ];

        array.forEach((item) => item.remove());
    };
    document.getElementById("sw_ch").addEventListener("click", turnOn);
});
