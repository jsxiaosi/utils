// 获取浏览器信息
export function getNavigatorUserAgent(): string {
  return navigator.userAgent;
}

// 内存
export function getNavigatorDeviceMemory(): number | undefined {
  return (navigator as any).deviceMemory;
}

// 首选语言
export function getNavigatorLanguages(): readonly string[] {
  return navigator.languages;
}

// 获取时区
export function getTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// cpu
export function getNavigatorHardwareConcurrency(): number {
  return navigator.hardwareConcurrency;
}

interface PluginMimeTypeData {
  type: string;
  suffixes: string;
}

interface PluginData {
  name: string;
  description: string;
  mimeTypes: PluginMimeTypeData[];
}

export function getNavigatorPlugins(): PluginData[] | undefined {
  const rawPlugins = navigator.plugins;

  if (!rawPlugins) {
    return undefined;
  }

  const plugins: PluginData[] = [];

  // Safari 10 doesn't support iterating navigator.plugins with for...of
  for (let i = 0; i < rawPlugins.length; ++i) {
    const plugin = rawPlugins[i];
    if (!plugin) {
      continue;
    }

    const mimeTypes: PluginMimeTypeData[] = [];
    for (let j = 0; j < plugin.length; ++j) {
      const mimeType = plugin[j];
      mimeTypes.push({
        type: mimeType.type,
        suffixes: mimeType.suffixes,
      });
    }

    plugins.push({
      name: plugin.name,
      description: plugin.description,
      mimeTypes,
    });
  }

  return plugins;
}

const navigatorFingerprint = {
  userAgent: getNavigatorUserAgent,
  deviceMemory: getNavigatorDeviceMemory,
  languages: getNavigatorLanguages,
  timezone: getTimezone,
  hardwareConcurrency: getNavigatorHardwareConcurrency,
  plugins: getNavigatorPlugins,
};

export default navigatorFingerprint;
