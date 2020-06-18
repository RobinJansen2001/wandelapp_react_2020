import * as $ from 'jquery';


/**
 * Read json from remoteserver
 * @param remoteserver
 * @returns {Promise}
 */
const getroutesjson = (remoteserver) => {
  return new Promise((resolve, reject) => { //New promise for array
    // let routesjson = [];
    $.ajax({
      type: "GET",
      url: remoteserver,
      dataType: "json"
    })
      .done((data) => {
          const routesjson = data.map((f) => {
            return {data: f};
          });
          resolve(routesjson);
        }
      )
      .fail((err) => reject(err));
  });
};

//new function with fetch delete querry delete routes ,
const deleteRoute = (remoteserver,id,cuid) => {
    return fetch(remoteserver + `/route?id=${id}&cuid=${cuid}`, {
        method: 'DELETE'
    }).then(response => response.json);
};
/**
 * Post a textfile to the remoteserver
 * @param remoteserver
 * @param file
 * @returns {Promise}
 */
const posttextfile = (remoteserver = "", file = "") => {

  return new Promise((resolve, reject) => { //New promise for array
    const reader = new FileReader();
    //Send contents file when read
    reader.onloadend = (e) => {
      const contents = e.target.result;

      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const res = JSON.parse(xhr.response);

            if(res.error === true){
              reject(res.msg);
            } else {
              resolve();
            }
          } else {
            reject("Problem posting " + xhr.status);
          }
        }
      };

      xhr.open("POST", remoteserver);
      xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
      xhr.send(contents);
    };
    reader.readAsText(file);
  });
};



  //expose ajax functions
export {getroutesjson, posttextfile,deleteRoute};
