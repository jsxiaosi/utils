import { series, parallel } from 'gulp';
import type { TaskFunction } from 'undertaker';
import { deleteSync } from 'del';
import { buildCdnModules, buildNodeModules } from './tasks/buildModules';
import { buildOutput } from './utils/paths';
import { generateTypesDefinitions } from './tasks/typeExport';
import { copyComponentsPackages, copyTypesDefinitions } from './tasks/copyFile';

export const clean: TaskFunction = (done) => {
  deleteSync(buildOutput, { force: true });
  done();
};

export default series(
  clean,
  parallel(buildNodeModules, buildCdnModules, generateTypesDefinitions),
  parallel(copyTypesDefinitions, copyComponentsPackages),
);
