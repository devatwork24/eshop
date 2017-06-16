'use strict';
angular
    .module('app.core')
    .controller('headerController', function($scope, PageValues) {
        //Set page title and description
        PageValues.title = "HEADER";
        PageValues.description = "";
        //Setup view model object
        var vm = this;
        vm.show = show; //[

        //     // your json data goes here

        // ];
    });
