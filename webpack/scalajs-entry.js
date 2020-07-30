if (process.env.NODE_ENV === "production") {
    const opt = require("./moy-sklad-opt.js");
    opt.main();
    module.exports = opt;
} else {
    var exports = window;
    exports.require = require("./moy-sklad-fastopt-entrypoint.js").require;
    window.global = window;

    const fastOpt = require("./moy-sklad-fastopt.js");
    fastOpt.main()
    module.exports = fastOpt;

    if (module.hot) {
        module.hot.accept();
    }
}
