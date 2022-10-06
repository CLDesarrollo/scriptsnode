(function () {
    "use strict";
    var gulp = require("gulp");
    var spsave = require("gulp-spsave");

    var spsaveCoreOption1 = {
        siteUrl: "https://cleverleaves.sharepoint.com/sites/ProductosIT",
        folder: "Documentos compartidos/Formulación de Articulos",
        checkin: true,
        checkinType: 1,
        flatten: false,
        notification: true
    };
    var spsaveCoreOption2 = {
        siteUrl: "https://cleverleaves.sharepoint.com/sites/ProductosIT",
        folder: "Documentos compartidos/Proveedores",
        checkin: true,
        checkinType: 1,
        flatten: false,
        notification: true
    };
    var spsaveCoreOption3 = {
        siteUrl: "https://cleverleaves.sharepoint.com/sites/ProductosIT",
        folder: "Documentos compartidos/Reporte_Produccion",
        checkin: true,
        checkinType: 1,
        flatten: false,
        notification: true
    };
    var spsaveCoreOption4 = {
        siteUrl: "https://cleverleaves.sharepoint.com/sites/ProductosIT",
        folder: "Documentos compartidos/Datos Maestros",
        checkin: true,
        checkinType: 1,
        flatten: false,
        notification: true
    };
    var spsaveCoreOption5 = {
        siteUrl: "https://cleverleaves.sharepoint.com/sites/ProductosIT",
        folder: "Documentos compartidos/Reporte_Produccion",
        checkin: true,
        checkinType: 1,
        flatten: false,
        notification: true
    };
    var spsaveCoreOption6 = {
        siteUrl: "https://cleverleaves.sharepoint.com/sites/ProductosIT",
        folder: "Documentos compartidos/Precios Pedido de Venta",
        checkin: true,
        checkinType: 1,
        flatten: false,
        notification: true
    };
    
    var spsaveCredential = {
        username: process.env.USERSP,
        password: process.env.PASSSP
    };

    gulp.task("upload", function () {
        gulp.src("./archivos/Formulación de Articulos Automático.xlsx").pipe(spsave(spsaveCoreOption1, spsaveCredential));
        gulp.src("./archivos/Reporte Proveedores Automático.xlsx").pipe(spsave(spsaveCoreOption2, spsaveCredential));
        gulp.src("./archivos/Reporte_Producción Automático.xlsx").pipe(spsave(spsaveCoreOption3, spsaveCredential));
        gulp.src("./archivos/Maestro de Artículos V2 Automático.xlsx").pipe(spsave(spsaveCoreOption4, spsaveCredential));
        gulp.src("./archivos/Reporte_Control_OrdenesProduccion Automático.xlsx").pipe(spsave(spsaveCoreOption5, spsaveCredential));
        return gulp.src("./archivos/Precios Pedido de Venta Automático.xlsx").pipe(spsave(spsaveCoreOption6, spsaveCredential));
    });

})();
