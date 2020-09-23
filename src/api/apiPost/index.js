function apiPost(url, body, method) {
  let params = body;
  let formBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export default apiPost;
