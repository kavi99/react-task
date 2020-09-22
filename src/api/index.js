function api(url, data, method) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      body: data ? data : null,
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
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
export default api;
