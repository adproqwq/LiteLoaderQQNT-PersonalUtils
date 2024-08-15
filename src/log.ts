/**
 * 自定义console.log
 * 
 * @param slug 插件slug
 * @param args 要log的东西
 */
export const log = (slug: string, ...args: any[]) => {
  console.log(`[${slug}]`, ...args);
};

/**
 * 自定义console.error
 * 
 * @param slug 插件slug
 * @param args 要log的东西
 */
export const logError = (slug: string, ...args: any[]) => {
  console.error(`[${slug}]`, ...args);
};