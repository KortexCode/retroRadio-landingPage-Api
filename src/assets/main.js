const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCJ80_CMnIOrKtMyFbIFIQ7A&part=snippet%2Cid&order=date&maxResults=9';

let content = null || document.getElementById("content");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '832c7e14c8msh929bd939d9770f4p126af9jsn17c9ab88e67a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const data = await fetch(urlApi, options);
    const response = await data.json();
    return response;
}

(async () => {
    try{
        const videos = await fetchData(API);
        let view = `${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden  group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0, 4).join(" ")}`;
        console.log(view);
        content.innerHTML = view;
    }
    catch(e){
        alert(e);
    }
})();
