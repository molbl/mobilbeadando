class Api {
  static URL =
    'https://wallhaven.cc/api/v1/';
  static search({page = 1, query, categories}) {

    return new Promise((resolve, reject) => {
      //console.log("Querying search api...");
      path = "search";
      path += "?page=" + page;
      if (query !== undefined && query !== "")
        path += "&q=" + query;
      if (categories !== undefined)
        path += "&categories=" + categories;
      //console.log("Requesting REAL api with path: " + path);
      fetch(Api.URL + encodeURI(path))
        .then(r => { 
            resolve(r.json())
        })
    });
  }

  static wpFullInfo(id) {
    return new Promise((resolve, reject) => {
      //console.log("Getting full wallpaper info for id: " + id)
      fetch(Api.URL + "w/" + id)
        .then(r => {
          resolve(r.json());
        });
    });
  }
}

export default Api;
