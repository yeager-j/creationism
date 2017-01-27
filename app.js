(function () {
    angular.module('creationism', ['ngSanitize'])
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;

        vm.factList = [
            {
                "text": "The green line is <b>1px</b> tall. You can barely see it. The blue box is <b>2,300,000px</b> tall. That's how big their error is.",
                "source": "https://map.gsfc.nasa.gov/universe/uni_age.html"
            },
            {
                "text": "That's like believing the distance from New York to California is <b>5.6 feet</b>."
            },
            {
                "text": "We know the approximate age of the Earth because we can measure the age of the Solar System. It's around <b>4.5 billion years old</b>.",
                "source": "https://pubs.usgs.gov/gip/geotime/age.html"
            }
        ]
    }
})();