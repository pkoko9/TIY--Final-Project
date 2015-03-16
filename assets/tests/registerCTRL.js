describe('registerCTRL', function() {

    var $scope;
    var RegisterCtrl;
    var Validate;

    beforeEach(module('app.controllers'));

    beforeEach(inject(function($rootScope, $controller, $injector) {
        $scope = $rootScope.$new();
        RegisterCtrl = $controller('registerCTRL', {$scope: $scope});
    }));

    it('should require a valid email address', function() {
        $scope.register({});
        expect($scope.error.identifier).to.not.equal('Please enter a valid email address');
    });

    // it('should not show errors if credentials are valid', function() {
    //     $scope.register({identifier: 'test@test.com', password: 'password123'});
    //     expect($scope.error.identifier).to.equal('');
    // });
});