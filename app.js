var weatherApp = angular.module('weatherApp', [
  'ui.router',
  'ngRoute',
  'ngResource',
  'ui.bootstrap'
]);


weatherApp.config(function ($stateProvider, $urlRouterProvider) {



  $stateProvider

    // HOME PAGE
    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html',
      controller: 'homeCtrl'
    })
    // DETAIL PAGE
    .state('detail', {
      url: '/detail/:type/:formattype',
      templateUrl: 'pages/forecast.html',
      controller: 'forecastCtrl'
    })
    .state('detailcontent', {
      url: '/detailcontent/:id/:formattype',
      templateUrl: 'pages/detailcontent.html',
      controller: 'detailcontentCtrl'
    });

  $urlRouterProvider.otherwise("/");

});

// SERVICE

weatherApp.service('cityservice', function () {
  this.city = 'Mumbai, India';
})

weatherApp.controller('homeCtrl', function ($scope, $state, cityservice, $timeout) {
  // console.log("i am in ");
  // $scope.swiperInit = function () {
  //   $timeout(function () {
  //     var bannerSlide = new Swiper('.swiper-container', {
  //       slidesPerView: 1,
  //       preloadImages: true,
  //       speed: 500,
  //       autoplay: 300,
  //       reverseDirection: false,
  //       paginationClickable: true,
  //       loop: true,
  //       pagination: {
  //         el: '.swiper-pagination',
  //       },
  //     });
  //   })
  // };

  // $scope.$on('$viewContentLoaded', function (event) {
  //   $scope.swiperInit();
  // })

  // $scope.$watch('city', function () {
  //   cityservice.city = $scope.city;
  // });

});






weatherApp.filter('serverimage', function () {
  return function (value) {
    if (value) {
      return "https://image.tmdb.org/t/p/w500" + value;
    } else {
      return "";
    }
  };
});

weatherApp.filter('serverimagecover', function () {
  return function (value) {
    if (value) {
      return "https://image.tmdb.org/t/p/w1280" + value;
    } else {
      return "";
    }
  };
});
weatherApp.filter("youtubeUrl", function ($sce) {
  return function (value) {
    if (value) {
      return $sce.trustAsResourceUrl('https://www.youtube.com/https://www.youtube.com/watch?v=' + value)
    } else {
      return "";
    }
  };
});

weatherApp.filter("youtubeImages", function ($sce) {
  return function (value) {
    if (value) {
      return $sce.trustAsResourceUrl('http://i3.ytimg.com/vi/' + value + '/hqdefault.jpg')
    } else {
      return "";
    }
  };
});

weatherApp.filter('truncate', function () {
  return function (value, limit) {
    if (value) {
      if (value.length < limit) {
        return value;
      } else {
        return value.slice(0, limit) + "...";
      }
    }
  }
});

weatherApp.directive('fancybox', function ($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function (scope, element, attr) {
      var $element = $(element);
      var target;
      if (attr.rel) {
        target = $("[rel='" + attr.rel + "']");
      } else {
        target = element;
      }

      target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        overflow: 'hidden',
        closeBtn: true,
        arrows: true,
        keyboard: true,
        protect: true,
        helpers: {
          media: {
            youtube: {
              autoplay: 1
            }
          }
        },
        buttons: [
          // 'fullScreen',
          //'download',
          // 'thumbs',
          'zoom',
          // 'tag',
          // 'share', //default share
          // 'sharing', //custom share
          'close',
        ]
      });
    }
  };
})