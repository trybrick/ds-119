var storeApp = angular
  .module('storeApp', ['infinite-scroll', 'ngRoute', 'ngSanitize', 'ngAnimate', 'ngTouch', 'chieffancypants.loadingBar', 'gsn.core', 'ui.map', 'ui.keypress', 'ui.event', 'ui.utils', 'angulartics'])
  .config(['$routeProvider', function($routeProvider) {
    // disable theme
    gsn.config.SiteTheme = 'bootstrap';
    gsn.config.defaultMobileListView = true;

    var le = [gsn.getThemeUrl('/views/layout.html')];
    for (var i = 1; i < 5; i++) {
      le.push(gsn.getThemeUrl('/views/layout-gsn' + i + '.html'));
    }

    var lec = gsn.getThemeUrl('/views/layout-circular.html');
    var homeFile = '/proxy/Content/meta/' + gsn.config.ChainId + '/?name=home page&meta=home&type=text/html&nocache=' + gsn.config.Version;
    var urls = [
      {
        login: 0,
        store: 0,
        path: '/',
        tpl: homeFile
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/article',
        tpl: gsn.getThemeUrl('/views/engine/article.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/article/:id',
        tpl: gsn.getThemeUrl('/views/engine/article.html')
      }
      , {
        login: 0,
        store: 1,
        layout: lec,
        path: '/circular',
        tpl: gsn.getThemeUrl('/views/engine/circular-view-flyer.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[4],
        path: '/circular/list',
        tpl: gsn.getThemeUrl('/views/engine/circular-view-list.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[4],
        path: '/circular/grid',
        tpl: gsn.getThemeUrl('/views/engine/circular-view-grid.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[4],
        path: '/circular/text',
        tpl: gsn.getThemeUrl('/views/engine/circular-view-list.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/contactus',
        controller: 'ContactUsCtrl',
        tpl: gsn.getThemeUrl('/views/engine/contact-us.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[3],
        path: '/coupons',
        tpl: gsn.getThemeUrl('/views/engine/coupons-printable.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[3],
        path: '/coupons/digital',
        tpl: gsn.getThemeUrl('/views/engine/coupons-digital.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[3],
        path: '/coupons/store',
        tpl: gsn.getThemeUrl('/views/engine/coupons-store.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/mealplannerfull',
        tpl: gsn.getThemeUrl('/views/engine/meal-planner.html')
      }
      , {
        login: 1,
        store: 0,
        layout: le[3],
        path: '/savedlists',
        tpl: gsn.getThemeUrl('/views/engine/saved-lists.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/mylist',
        tpl: gsn.getThemeUrl('/views/engine/shopping-list.html')
      }
      , {
        login: 0,
        store: 0,
        path: '/mylist/print',
        tpl: gsn.getThemeUrl('/views/engine/shopping-list-print.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/mylist/email',
        tpl: gsn.getThemeUrl('/views/engine/shopping-list-email.html')
      }
      , {
        login: 1,
        store: 0,
        layout: le[3],
        path: '/myrecipes',
        tpl: gsn.getThemeUrl('/views/engine/my-recipes.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[4],
        path: '/product',
        tpl: gsn.getThemeUrl('/views/engine/product.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[4],
        path: '/product/search',
        tpl: gsn.getThemeUrl('/views/engine/product-search.html')
      }
      , {
        login: 1,
        store: 0,
        path: '/profile',
        tpl: gsn.getThemeUrl('/views/engine/prologic/profile-rewardcard.html')
      }
      , {
        login: 1,
        store: 0,
        path: '/profile/rewardcard',
        tpl: gsn.getThemeUrl('/views/engine/prologic/profile-rewardcard.html')
      }
      , {
        login: 1,
        store: 0,
        path: '/profile/rewardcard/updated',
        tpl: gsn.getThemeUrl('/views/engine/prologic/profile-edit.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/recipe/search',
        tpl: gsn.getThemeUrl('/views/engine/recipe-search.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/recipe',
        tpl: gsn.getThemeUrl('/views/engine/recipe-details.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/recipe/:id',
        tpl: gsn.getThemeUrl('/views/engine/recipe-details.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/recipecenter/recipe/:id',
        tpl: gsn.getThemeUrl('/views/engine/recipe-details.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/recipecenter',
        tpl: gsn.getThemeUrl('/views/engine/recipe-center.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/recipevideo',
        tpl: gsn.getThemeUrl('/views/engine/recipe-video.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/recipecenter/recipevideo',
        tpl: gsn.getThemeUrl('/views/engine/recipe-video.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/recipevideo/:id',
        tpl: gsn.getThemeUrl('/views/engine/recipe-video.html')
      }
      , {
        login: 0,
        store: 1,
        layout: le[4],
        path: '/specials',
        tpl:gsn.getThemeUrl('/views/engine/specials.html')
      }

      , {
        login: 0,
        store: 0,
        path: '/registration',
        tpl: gsn.getThemeUrl('/views/engine/prologic/registration.html')
      }
      , {
        login: 0,
        store: 0,
        path: '/registration/facebook',
        tpl: gsn.getThemeUrl('/views/engine/prologic/registration.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/signin',
        tpl: gsn.getThemeUrl('/views/engine/signin.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[1],
        path: '/store/:id',
        tpl: gsn.getThemeUrl('/views/engine/store-info.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/storelocator',
        tpl: gsn.getThemeUrl('/views/engine/store-locator.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[3],
        path: '/unsubscribe',
        tpl: gsn.getThemeUrl('/views/engine/unsubscribe.html')
      }
      , {
        login: 0,
        store: 0,
        layout: le[2],
        path: '/applyJob',
        tpl: gsn.getThemeUrl('/views/engine/employment-apply.html')
      }
    ];


    angular.forEach(urls, function(v, k) {
      $routeProvider.when(v.path, {
        templateUrl: v.tpl,
        caseInsensitiveMatch: true,
        storeRequired: v.store,
        requireLogin: v.login,
        controller: v.controller,
        layout: v.layout
      })
    });

    $routeProvider.when('/coupons/printable', {
      redirectTo: '/coupons',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/circulars', {
      redirectTo: '/circular',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/circulars/:id/:page', {
      redirectTo: '/circular',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/signin', {
      redirectTo: '/profile',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/account/login', {
      redirectTo: '/profile',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/account/manage', {
      redirectTo: '/profile',
      caseInsensitiveMatch: true
    });

    $routeProvider.otherwise({
      templateUrl: gsn.getThemeUrl('/views/engine/static-content.html'),
      caseInsensitiveMatch: true
    });
  }]);

// ContactUsCtrl
storeApp.controller('ContactUsCtrl', ['$scope', 'gsnProfile', 'gsnApi', '$timeout', 'gsnStore', '$interpolate', '$http', function ($scope, gsnProfile, gsnApi, $timeout, gsnStore, $interpolate, $http) {

  $scope.activate = activate;
  $scope.vm = { PrimaryStoreId: gsnApi.getSelectedStoreId()};
  $scope.masterVm = { PrimaryStoreId: gsnApi.getSelectedStoreId()};

  $scope.hasSubmitted = false;    // true when user has click the submit button
  $scope.isValidSubmit = true;    // true when result of submit is valid
  $scope.isSubmitting = false;    // true if we're waiting for result from server
  $scope.errorResponse = null;
  $scope.contactSuccess = false;
  $scope.topics = [];
  $scope.topicsByValue = {};
  $scope.storeList = [];
  $scope.storesById = {};

   var template;

  $http.get($scope.getContentUrl('/views/email/contact-us.html'))
    .success(function (response) {
      template = response.replace(/data-ctrl-email-preview/gi, '');
    });

  function activate() {
    gsnStore.getStores().then(function (rsp) {
      $scope.stores = rsp.response;

      // prebuild list base on roundy spec (ﾉωﾉ)
      // make sure that it is order by state, then by name
      $scope.storesById = gsnApi.mapObject($scope.stores, 'StoreId');
    });

    gsnProfile.getProfile().then(function (p) {
      if (p.success) {
        $scope.masterVm = angular.copy(p.response);
        $scope.doReset();
      }
    });

    $scope.topics = gsnApi.groupBy(getData(), 'ParentOption');
    $scope.topicsByValue = gsnApi.mapObject($scope.topics, 'key');
    $scope.parentTopics = $scope.topicsByValue[''];

    delete $scope.topicsByValue[''];
  }

  $scope.getSubTopics = function () {
    return $scope.topicsByValue[$scope.vm.Topic];
  };

  $scope.getFullStateName = function (store) {
    return '=========' + store.LinkState.FullName + '=========';
  };

  $scope.getStoreDisplayName = function (store) {
    return store.StoreName + ' - ' + store.PrimaryAddress + '(#' + store.StoreNumber + ')';
  };

  $scope.doSubmit = function () {
    var payload = $scope.vm;
    if ($scope.myContactUsForm.$valid) {
      if (!$scope.hasReceiveEmail) {
        gsnApi.del(payload, 'ReceiveEmail');
      }

      payload.Store = $scope.getStoreDisplayName($scope.storesById[payload.PrimaryStoreId]);
      $scope.email = payload;
      payload.EmailMessage = $interpolate(template)($scope);
      // prevent double submit
      if ($scope.isSubmitting) return;

      $scope.hasSubmitted = true;
      $scope.isSubmitting = true;
      $scope.errorResponse = null;
      gsnProfile.sendContactUs(payload)
          .then(function (result) {
            $scope.isSubmitting = false;
            $scope.isValidSubmit = result.success;
            if (result.success) {
              $scope.contactSuccess = true;
            } else if (typeof (result.response) == 'string') {
              $scope.errorResponse = result.response;
            } else {
              $scope.errorResponse = gsnApi.getServiceUnavailableMessage();
            }
          });
    }
  };

  ////
  // Do Reset
  ////
  $scope.doReset = function () {
    $scope.vm = angular.copy($scope.masterVm);
    $scope.vm.ConfirmEmail = $scope.vm.Email;
  };

  $scope.activate();

  ////
  // Get Data
  ////
  function getData() {
    return [
        {
          "Value": "Company",
          "Text": "Company",
          "ParentOption": ""
        },
        {
          "Value": "Store",
          "Text": "Store",
          "ParentOption": ""
        },
        {
          "Value": "Other",
          "Text": "Other",
          "ParentOption": ""
        },
        {
          "Value": "Employment",
          "Text": "Employment",
          "ParentOption": ""
        },
        {
          "Value": "Website",
          "Text": "Website",
          "ParentOption": ""
        },
        {
          "Value": "Pharmacy",
          "Text": "Pharmacy",
          "ParentOption": ""
        }
    ];
  }
}]);


