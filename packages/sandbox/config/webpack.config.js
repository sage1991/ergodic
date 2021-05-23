const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")


const resolvePath = (pathname) => path.resolve(__dirname, pathname)
const TARGET_PATH = resolvePath("../dist")
const INDEX_FILE_PATH = resolvePath("../src/index.tsx")
const TEMPLATE_HTML_PATH = resolvePath("../public/index.html")
const BABEL_CONFIG_FILE_PATH = resolvePath("./babel.config.json")


module.exports = (env) => {
  const { production } = env

  return {
    mode: production ? "production" : "development",
    devtool: production ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: TARGET_PATH,
      port: 8080
    },
    entry: INDEX_FILE_PATH,
    output: {
      path: TARGET_PATH,
      filename: "[name].bundle.[contenthash].js",
    },
    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      }
    },
    resolve: {
      extensions: [ "...", ".js", ".jsx", ".ts", ".tsx" ]
    },
    module: {
      rules: [
        {
          test: /\.worker\.(ts|js)$/,
          use: [
            {
              loader: "worker-loader",
              options: {
                inline: "fallback"
              }
            },
            {
              loader: "babel-loader",
              options: {
                configFile: BABEL_CONFIG_FILE_PATH,
              }
            }
          ]
        },
        {
          test: /.(ts|tsx|js|jsx)$/i,
          exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/,
          use: {
            loader: "babel-loader",
            options: {
              configFile: BABEL_CONFIG_FILE_PATH,
            }
          }
        },
        {
          test: /\.css$/i,
          use: [ "style-loader", "css-loader" ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/images/[name].[contenthash].[ext]",
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/fonts/[name].[contenthash].[ext]",
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack App",
        template: TEMPLATE_HTML_PATH
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          async: !production,
          diagnosticOptions: {
            syntactic: true,
            semantic: true
          }
        }
      })
    ]
  }
}
