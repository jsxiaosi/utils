import { withInstallDirectives } from '../../utils/install';
import vWaterMark from './src/waterMark';

export const waterMark = withInstallDirectives(vWaterMark, 'waterMark'); // 增加类型

export default waterMark;

export { vWaterMark };
