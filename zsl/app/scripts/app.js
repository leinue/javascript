'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:true,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login'
    })
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'views/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'views/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'views/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'views/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'views/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'views/ui-elements/grid.html',
       url:'/grid'
   })
    //   .state('dashboard',{
    //     url:'/hq',
    //     templateUrl:'views/hq/supply-mgr.html'
    // })
      .state('dashboard.staff-mgr',{
        templateUrl:'views/hq/staff-mgr.html',
        url:'/hq/staff-mgr'
    })
      .state('dashboard.supply-mgr',{
        templateUrl:'views/hq/supply-mgr.html',
        url:'/hq/supply-mgr'
    })
      .state('dashboard.branch-office-mgr',{
        templateurl:'views/hq/branch-office-mgr.html',
        url:'/hq/branch-office-mgr'
    })
      .state('dashboard.agent-mgr',{
        templateUrl:'views/hq/agent-mgr.html',
        url:'/hq/agent-mgr'
    })
      .state('dashboard.route-area-mgr',{
        templateUrl:'views/hq/route-area-mgr.html',
        url:'/hq/route-area-mgr'
    })
      .state('dashboard.route-product-mgr',{
        templateUrl:'views/hq/route-product-mgr.html',
        url:'/hq/route-product-mgr'
    })
      .state('dashboard.travel-order-mgr',{
        templateUrl:'views/hq/travel-order-mgr.html',
        url:'/hq/travel-order-mgr'
    })
      .state('dashboard.goods-assortment',{
        templateUrl:'views/hq/goods-assortment.html',
        url:'/hq/goods-assortment'
    })
      .state('dashboard.points-mall',{
        templateUrl:'views/hq/points-mall.html',
        url:'/hq/points-mall'
    })
      .state('dashboard.vip-prefeature',{
        templateUrl:'views/hq/vip-prefeature.html',
        url:'/hq/vip-prefeature'
    })
      .state('dashboard.perimeter-mall',{
        templateUrl:'views/hq/perimeter-mall.html',
        url:'/hq/perimeter-mall'
    })
      .state('dashboard.points-sign-in',{
        templateUrl:'views/hq/points-sign-in.html',
        url:'/hq/points-sign-in'
    })
      .state('dashboard.dial-raffle',{
        templateUrl:'views/hq/dial-raffle.html',
        url:'/hq/dial-raffle'
    })
      .state('dashboard.vote',{
        templateUrl:'views/hq/vote.html',
        url:'/hq/vote'
    })
      .state('dashboard.card-mgr',{
        templateUrl:'views/hq/card-mgr.html',
        url:'/hq/card-mgr'
    })
      .state('dashboard.profile-mgr',{
        templateUrl:'views/hq/profile-mgr.html',
        url:'/hq/profile-mgr'
    })
      .state('dashboard.vip-points-mgr',{
        templateUrl:'views/hq/vip-points-mgr.html',
        url:'/hq/vip-points-mgr'
    })
      .state('dashboard.agent-statistics',{
        templateUrl:'views/hq/agent-statistics.html',
        url:'/hq/agent-statistics'
    })
      .state('dashboard.supply-statistics',{
        templateUrl:'views/hq/supply-statistics.html',
        url:'/hq/supply-statistics'
    })
      .state('dashboard.shopkeeper-statistics',{
        templateUrl:'views/hq/shopkeeper-statistics.html',
        url:'/hq/shopkeeper-statistics'
    })
      .state('dashboard.department-statistics',{
        templateUrl:'views/hq/department-statistics.html',
        url:'/hq/department-statistics'
    })
  }]);

    
