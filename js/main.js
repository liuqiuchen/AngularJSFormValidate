angular.module('myApp', [])
    .controller('MainController', function ($scope) {

        $scope.userdata = {};

        $scope.submitForm = function () {
            console.log('表单提交了');
            // $scope.userdata是表单提交的内容
            console.log($scope.userdata);
            // Object {username: "aaa", password: "123456", password2: "456789"}

            if($scope.signUpForm.$invalid) {
                alert('请检查你输入的内容');
            } else {
                alert('提交成功！');
            }
        };
    })

// 创建指令
.directive('compare', function () {
    var o = {};
    return o;
});












