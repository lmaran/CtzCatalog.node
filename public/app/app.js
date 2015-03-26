// in case we want to load ui.bootstrap as individual components we need to add references to the related templates
// we can specify only the related templates: E.g. for <ui.bootstrap.accordion> --> 'template/accordion/accordion-group.html', 'template/accordion/accordion.html'
// or we can specify a reference to the entire template: --> 'ui.bootstrap.tpls', in case we plan to use more modules in the future and reduce maintenance overhead
// https://github.com/angular-ui/bootstrap/issues/266
var app = angular.module('ctzCatalog', [
    'ngAnimate',
    'ngSanitize',
    'ngRoute',
    'pascalprecht.translate',
    'monospaced.elastic',
    'mgcrea.ngStrap',
    'ui.bootstrap.accordion',
    'ui.bootstrap.dropdown',
    'ui.bootstrap.tpls', // or add only the related templates: 'template/accordion/accordion-group.html', 'template/accordion/accordion.html',
    'angularFileUpload',
    'ui.sortable'
]);

app.config(['$routeProvider', '$locationProvider', '$translateProvider', '$tooltipProvider', function ($routeProvider, $locationProvider, $translateProvider, $tooltipProvider) {
    
    $routeProvider

        .when('/admin',
            {
                controller: 'homeController',
                templateUrl: 'app/admin/home/home.html'
            })

        // *** customers ***
        .when('/admin/customers', {
            controller: 'customersController',
            templateUrl: 'app/admin/customers/customers.html',
            title: 'Customers'
        })
        .when('/admin/customers/create', {
            controller: 'customerController',
            templateUrl: 'app/admin/customers/customer.html',
            title: 'Create Customer'
        })
        .when('/admin/customers/:id', {
            controller: 'customerController',
            templateUrl: 'app/admin/customers/customer.html',
            title: 'Edit Customer',
            isEditMode: true
        })


        // *** products ***
        .when('/admin/products', {
            controller: 'productsController',
            templateUrl: 'app/admin/products/products.html',
            title: 'Products'
        })
        .when('/admin/products/create', {
            controller: 'productController',
            templateUrl: 'app/admin/products/product.html',
            title: 'Create Product'
        })
        .when('/admin/products/:id', {
            controller: 'productController',
            templateUrl: 'app/admin/products/product.html',
            title: 'Edit Product',
            isEditMode: true
        })


        // *** techSpecs ***
        .when('/admin/techspecs', {
            controller: 'techSpecsController',
            templateUrl: 'app/admin/techspecs/techSpecs.html',
            title: 'Customers'
        })
        .when('/admin/techspecs/create', {
            controller: 'techSpecController',
            templateUrl: 'app/admin/techspecs/techSpec.html',
            title: 'Create TechSpec'
        })
        .when('/admin/techspecs/:id', {
            controller: 'techSpecController',
            templateUrl: 'app/admin/techspecs/techSpec.html',
            title: 'Edit TechSpec',
            isEditMode: true
        })

        // *** pickOrders ***
        .when('/admin/pickOrders', {
            controller: 'pickOrdersController',
            templateUrl: 'app/admin/pickOrders.html',
            title: 'Pick Orders'
        })
        .when('/admin/pickOrders/create', {
            controller: 'pickOrderController',
            templateUrl: 'app/admin/pickOrder.html',
            title: 'Create PickOrder'
        })
        .when('/admin/pickOrders/:id', {
            controller: 'pickOrderController',
            templateUrl: 'app/admin/pickOrder.html',
            title: 'Edit PickOrder',
            isEditMode: true
        })


        // *** optionSets ***
        .when('/admin/optionsets', {
            controller: 'optionSetsController',
            templateUrl: 'app/admin/optionSets.html',
            title: 'OptionSets'
        })
        .when('/admin/optionsets/create', {
            controller: 'optionSetController',
            templateUrl: 'app/admin/optionSet.html',
            title: 'Create OptionSet'
        })
        .when('/admin/optionsets/:id', {
            controller: 'optionSetController',
            templateUrl: 'app/admin/optionSet.html',
            title: 'Edit OptionSet',
            isEditMode: true
        })

        // *** attributes ***
        .when('/admin/attributes', {
            controller: 'attributesController',
            templateUrl: 'app/admin/attributes.html',
            title: 'Attributes'
        })
        .when('/admin/attributes/create', {
            controller: 'attributeController',
            templateUrl: 'app/admin/attribute.html',
            title: 'Create Attribute'
        })
        .when('/admin/attributes/:id', {
            controller: 'attributeController',
            templateUrl: 'app/admin/attribute.html',
            title: 'Edit Attribute',
            isEditMode: true
        })

        // *** attributeSets ***
        .when('/admin/attributesets', {
            controller: 'attributeSetsController',
            templateUrl: 'app/admin/attributeSets.html',
            title: 'AttributeSets'
        })
        .when('/admin/attributesets/create', {
            controller: 'attributeSetController',
            templateUrl: 'app/admin/attributeSet.html',
            title: 'Create AttributeSet'
        })
        .when('/admin/attributesets/:id', {
            controller: 'attributeSetController',
            templateUrl: 'app/admin/attributeSet.html',
            title: 'Edit AttributeSet',
            isEditMode: true
        })

        // *** ums ***
        .when('/admin/ums', {
            controller: 'umsController',
            templateUrl: 'app/admin/ums.html',
            title: 'Customers'
        })
        .when('/admin/ums/create', {
            controller: 'umController',
            templateUrl: 'app/admin/um.html',
            title: 'Create UM'
        })
        .when('/admin/ums/:id', {
            controller: 'umController',
            templateUrl: 'app/admin/um.html',
            title: 'Edit UM',
            isEditMode: true
        })


        .otherwise({ redirectTo: '/admin' });

    // use the HTML5 History API - http://scotch.io/quick-tips/js/angular/pretty-urls-in-angularjs-removing-the-hashtag
    $locationProvider.html5Mode(true);


    // Initialize the translate provider
    // Doc: http://angular-translate.github.io/docs/#/api
    $translateProvider
        //.translations('en', translations)
        .preferredLanguage('en')
        .fallbackLanguage('en') // maybe there are some translation ids, that are available in an english translation table, but not in other (ro) translation table
        //.useLocalStorage() //to remember the chosen language; it use 'storage-cookie' as fallback; 'storage-cookie' depends on 'ngCookies'
        .useStaticFilesLoader({
            prefix: 'assets/translates/',
            suffix: '.json'
        });

    angular.extend($tooltipProvider.defaults, {
        html: true
    });

}]);


app.config(function ($modalProvider) {
    angular.extend($modalProvider.defaults, {
        //animation: '',
        //backdropAnimation: ''
    });
})

//app.config(['$httpProvider', function ($httpProvider) {
//    $httpProvider.interceptors.push('authInterceptor');
//}]);