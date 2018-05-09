weatherApp.controller('detailcontentCtrl', function ($scope, $state, $resource, $stateParams, $http, cityservice) {

  $scope.getOneVideoData = {}
  // console.log($stateParams, "check ul data")
  $scope.typeId = $stateParams.id;
  $scope.type = $stateParams.formattype;

  // GET MOVIE DETAILS
  $scope.getDetail = function () {
    $http({
      url: "https://api.themoviedb.org/3/" + $scope.type + '/' + $scope.typeId + '?',
      method: 'GET',
      params: {
        // movie_id:$scope.typeId,
        api_key: '7d962e568f55797ed84f398a832a9083',
        mode: 'json',
      },
      withCredentials: false,
    }).then(function (data) {
      // console.log(data)
      $scope.getOneData = data.data;
    })
  }
  $scope.getDetail();

  // GET VIDEOS FOR MOVIES

  $scope.getOneVideoAPI = function () {
    $http({
      url: "https://api.themoviedb.org/3/" + $scope.type + '/' + $scope.typeId + '/' + 'videos' + '?',
      method: 'GET',
      params: {
        // movie_id:$scope.typeId,
        api_key: '7d962e568f55797ed84f398a832a9083',
        mode: 'json',
      },
      withCredentials: false,
    }).then(function (data) {
      // console.log(data,"videoData")
      $scope.getOneVideoData = data.data.results;
    })
  }
  $scope.getOneVideoAPI()

  // GET CREDITS

  $scope.getOneVideoAPI = function () {
    $http({
      url: "https://api.themoviedb.org/3/" + $scope.type + '/' + $scope.typeId + '/' + 'reviews' + '?',
      method: 'GET',
      params: {
        // movie_id:$scope.typeId,
        api_key: '7d962e568f55797ed84f398a832a9083',
        mode: 'json',
      },
      withCredentials: false,
    }).then(function (data) {
      // console.log(data,"creditsData")
      $scope.getOnereviewsData = data.data.results;
    })
  }
  $scope.getOneVideoAPI()


  // GET SIMILAR MOVIES 
  $scope.pagesData = {}
  $scope.pagesData.page = 1
  $scope.getSimilarMovies = function () {
    $http({
      url: "https://api.themoviedb.org/3/" + $scope.type + '/' + $scope.typeId + '/' + 'similar' + '?',
      method: 'GET',
      params: {
        // movie_id:$scope.typeId,
        api_key: '7d962e568f55797ed84f398a832a9083',
        page: $scope.pagesData.page,
        mode: 'json',
      },
      withCredentials: false,
    }).then(function (data) {
      // console.log(data,"similar movies data")
      $scope.similarMoviesData = data.data.results;

    })
  }
  $scope.getSimilarMovies()
  // GET SIMILAR MOVIES END

  // GET RECOMMONDED MOVIES
  $scope.getSimilarMovies = function () {
    $http({
      url: "https://api.themoviedb.org/3/" + $scope.type + '/' + $scope.typeId + '/' + 'recommendations' + '?',
      method: 'GET',
      params: {
        // movie_id:$scope.typeId,
        api_key: '7d962e568f55797ed84f398a832a9083',
        page: $scope.pagesData.page,
        mode: 'json',
      },
      withCredentials: false,
    }).then(function (data) {
      // console.log(data,"recommeneded data")
      $scope.recommendedData = data.data.results;

    })
  }
  $scope.getSimilarMovies()
  // GET RECOMMONDED MOVIES END

  // CLICK FOR DETAIL
  $scope.movieDetailPage = function (data, type) {
    // console.log("i am in clikcked function", data, type);
    $state.go('detailcontent', {
      id: data,
      formattype: type,
    });
  }
  // CLICK FOR DETAIL END

})