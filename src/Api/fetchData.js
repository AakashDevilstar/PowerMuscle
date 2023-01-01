export const exerciseOptions= {
  method: 'GET',
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '34f0ba102dmshfacaf779949f039p1f4f28jsnb2a70faa00c5',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '34f0ba102dmshfacaf779949f039p1f4f28jsnb2a70faa00c5',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
};
  
export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
};