weatherApp.controller('forecastCtrl', function ($scope,$timeout, $resource, $state, $stateParams, $http, cityservice) {
  $scope.city = cityservice.city;

  console.log($stateParams, "check the url data")

        $timeout( function(){
             $(".fancybox").fancybox();
        }, 100 );


  // $scope.days = $stateParams.days || 2;

  // $scope.weatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
  //   callback: "JSON_CALLBACK",
  // }, {
  //     get: {
  //       method: "JSONP"
  //     }
  //   });

  // $scope.weatherData = $scope.weatherApi.get({
  //   q: $scope.city,
  //   cnt: $scope.days,
  //   APPID: '75ab4a21554c3eea638f0493fc501db1'
  // });


  $scope.type = $stateParams.type || 'now_playing';
  $scope.formattype = $stateParams.formattype || 'movie';
  $scope.pagesData = {}
  $scope.pagesData.page = 1
  $scope.movieApi = function () {
    $http({
      url: "https://api.themoviedb.org/3/" + $scope.formattype + '/' + $scope.type + "?",
      method: 'GET',
      params: {
        api_key: '7d962e568f55797ed84f398a832a9083',
        page: $scope.pagesData.page,
        mode: 'json',
      },
      withCredentials: false,
    }).then(function (data) {
      $scope.movieData = data.data.results;
      $scope.pagesData = data.data;

      // callback(data);
      console.log($scope.movieData, "new thing")
      console.log(data, "new thing again")
    });
  }
  $scope.movieApi();

  //  PAGINATION
  $scope.pageChanged = function () {
    $scope.pagesData.page = $scope.pagesData.page++;
    $scope.movieApi();
  }

  // PAGINATION END

  // CLICK FOR DETAIL
  $scope.movieDetailPage = function (data, type) {
    console.log("i am in clikcked function", data, type);
    $state.go('detailcontent', {
      id: data,
      formattype: type,
    });
  }
  // CLICK FOR DETAIL END

});