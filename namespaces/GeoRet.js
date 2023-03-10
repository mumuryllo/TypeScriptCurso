"use strict";
var Geometria;
(function (Geometria) {
    let Areas;
    (function (Areas) {
        const PI = 3.14;
        function retangulo(base, altura) {
            return base * altura;
        }
        Areas.retangulo = retangulo;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
