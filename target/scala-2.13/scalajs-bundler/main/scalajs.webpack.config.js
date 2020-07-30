module.exports = {
  "entry": {
    "moy-sklad-fastopt": ["/Users/ekaterinazaslavskaa/moy-sklad/target/scala-2.13/scalajs-bundler/main/moy-sklad-fastopt-entrypoint.js"]
  },
  "output": {
    "path": "/Users/ekaterinazaslavskaa/moy-sklad/target/scala-2.13/scalajs-bundler/main",
    "filename": "[name]-library.js",
    "library": "ScalaJSBundlerLibrary",
    "libraryTarget": "var"
  },
  "mode": "development",
  "devtool": "source-map",
  "module": {
    "rules": [{
      "test": new RegExp("\\.js$"),
      "enforce": "pre",
      "use": ["source-map-loader"]
    }]
  }
}