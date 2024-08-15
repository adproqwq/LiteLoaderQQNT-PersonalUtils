import { logError } from './log';

/**
 * 用于DOM节点监听
 * 
 * @param slug 插件slug
 * @param selector 节点选择器
 * @param callback 节点变化时的回调函数
 * @param continuous 是否持续监听，默认为false
 */
export default (slug: string, selector: string, callback: Function, continuous = false) => {
	let elementExists = false;
	try{
		const timer = setInterval(() => {
			const element = document.querySelector(selector);
			if(element && !elementExists) {
				elementExists = true;
				callback();
			}
			else if(!element) elementExists = false;
			if(element && !continuous) {
				clearInterval(timer);
			}
		}, 100);
	} catch(error){
		logError(slug, error);
	}
}