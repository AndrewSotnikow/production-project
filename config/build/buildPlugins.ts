import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildPath} from "./types/config";

export function buildPlugins(paths: BuildPath): webpack.WebpackPluginInstance[] {

    return [new HtmlWebpackPlugin({
        template: paths.html
    }), new webpack.ProgressPlugin()]
}
