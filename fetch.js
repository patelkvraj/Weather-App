fetch(
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f21858227f3d41946492b0d098e42af5"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);
  });
