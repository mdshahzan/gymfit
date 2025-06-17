export const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'd800f0f1f9msh90fef5f452712c7p157f8ajsn1c8c8ecbf850',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'd800f0f1f9msh90fef5f452712c7p157f8ajsn1c8c8ecbf850',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const FetchData = async (url,options)=>{
    const response = await fetch(url,options)
    const data = await response.json();
    return data


}