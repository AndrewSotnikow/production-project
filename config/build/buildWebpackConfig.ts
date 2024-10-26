import {BuildOptions} from "./types/config";
import path from "path";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import { Configuration } from 'webpack';
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const {mode, paths, isDev} = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules:  buildLoaders()
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
