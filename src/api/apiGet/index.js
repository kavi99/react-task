function apiGet(url, method) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
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
export default apiGet;
