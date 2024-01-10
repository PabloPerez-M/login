import path from "path";
// import { Configuration } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const config /*: Configuration */ = {
  mode:
    // (process.env.NODE_ENV as "production" | "development" | undefined) ??
    "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist/index.html"),
    },
    port: 3000,
  },
};

export default config;

/* const config: Configuration = {
  // mode:
  // (process.env.NODE_ENV as "production" | "development" | undefined) ??
  // "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
  ], 
};

export default config; */


/* const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/App.tsx",
  output: {
    filename: "budle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', 'js'],
  },
  module: {
      rules: [
        // `ts` and `tsx` files are parsed using `ts-loader`
        {
          test: /\.(ts|tsx)$/, 
          exclude: /node_modules/,
          use: ["ts-loader"],
        },
      ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  }
}; */