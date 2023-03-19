import { resolve } from 'path';
// import vue from '@vitejs/plugin-vue';
// import vueJsx from '@vitejs/plugin-vue-jsx';
// import DefineOptions from 'unplugin-vue-macros/rollup';
import image from '@rollup/plugin-image';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import type { InputPluginOption } from 'rollup';
import { pkgRoot } from './paths';

export const epPackage = resolve(pkgRoot, 'package.json');

export const getPackageManifest = (pkgPath: string) => {
  return require(pkgPath);
};

export const getPackageDependencies = (pkgPath: string): Record<'dependencies' | 'peerDependencies', string[]> => {
  const manifest = getPackageManifest(pkgPath);
  const { dependencies = {}, peerDependencies = {} } = manifest;

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  };
};

// 外部引入库标识，以防Rollup打包在一起
export const generateExternal = async (buildType: 'node' | 'cdn') => {
  const { dependencies, peerDependencies } = getPackageDependencies(epPackage);
  if (buildType === 'cdn') {
    return [...peerDependencies];
  }
  return [...dependencies, ...peerDependencies];
};

// Rollup插件配置
export const rollupBuildPlugins = (minify?: boolean): InputPluginOption => {
  const plugins: InputPluginOption = [
    // 图片处理
    image(),
    // Rollup 处理外部模块
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
    // Rollup 识别 commonjs
    commonjs(),
    // Esm 编译器
    esbuild({
      sourceMap: true,
      target: 'es2015',
      minify,
      treeShaking: true,
      legalComments: 'eof',
    }),
  ];
  return plugins;
};
