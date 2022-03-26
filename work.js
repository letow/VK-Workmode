
window.addEventListener('load', function chich() {
	//myStorage = this.window.localStorage;
	function turnOn(){
		let news = document.getElementById('l_nwsf');
		let photo = document.getElementById('l_ph');
		let audio = document.getElementById('l_aud');
		let video = document.getElementById('l_vid');
		let clips = document.getElementById('l_svd');
		let games = document.getElementById('l_ap');
		let mini_apps = document.getElementById('l_mini_apps');
		let favs = document.getElementById('l_fav');
		let audioplayer = document.getElementById('top_audio_player');
		let notif = document.getElementById('top_notify_btn');

		let array = [news,photo,audio,video,clips,games,mini_apps,favs,audioplayer,notif]
		console.log(array);
		array.forEach(function(item, i, array){
			if(item){
				item.remove();
			}
		});
	}
	document.getElementById("sw_ch").addEventListener("click", turnOn);
})
