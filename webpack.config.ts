import path from "path";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPath} from "./config/build/types/config";
import { Configuration } from 'webpack';





export default (env: BuildEnv) =>  {
    const mode = 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000


    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const config: Configuration = buildWebpackConfig({
        mode: 'development',
        paths,
        isDev,
        port: PORT
    })

    return config
}

