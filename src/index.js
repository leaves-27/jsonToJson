const fs = require('fs');
// 合并为想要的json文件
const menus = [{
	id: '1',
	name: 'preferential',
	desc: '超值特惠',
	items: {},
}, {
	id: '2',
	name: 'korea',
	desc: '韩国节',
	items: {},
}];
const config = {
	inputDir: '/Users/leaves/Documents/workspace3/activity/static/temp-json',
	outDir: '/Users/leaves/Documents/workspace3/activity/static/json'
};

const newMenus = menus.map((item)=>{
	try{
		const items = fs.readFileSync(`${config.inputDir}/${item.name}.json`, 'utf-8');
		return {
			...item,
			items: JSON.parse(items)
		}
	} catch(err){
		console.log('写文件出错', err);
	}
});

try {
	fs.writeFileSync(`${config.outDir}/app.json`, JSON.stringify(newMenus));
} catch(err){
	console.log('写文件出错', err);
}
