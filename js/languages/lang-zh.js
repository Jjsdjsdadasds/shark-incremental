// This is Simplified Chinese！

LANGUAGES.ZH = {
    name: "Simplified Chinese",
    inter_name: "简体中文",
    icon: "lang-zh",

    text: {
        // Currencies

        'fish-name': "鱼",
        'fish-costName': toTextStyle('鱼','fish'),

        'prestige-name': "重生碎片",
        'prestige-costName': toTextStyle('重生','prestige') + "碎片",

        'coral-name': "珊瑚",
        'coral-costName': toTextStyle('珊瑚','coral'),

        'ice-name': "冰",
        'ice-costName': toTextStyle('冰','ice'),

        'salt-name': "盐",
        'salt-costName': toTextStyle('盐','salt'),

        'snow-name': "压缩雪花",
        'snow-costName': toTextStyle('压缩雪花','snow'),

        'kelp-name': "褐藻",
        'kelp-costName': toTextStyle('褐藻','kelp'),

        'core-name': "岩浆碎片",
        'core-costName': toTextStyle('岩浆','core') + '碎片',

        'humanoid-name': "类人鲨鱼",
        'humanoid-costName': toTextStyle('类人','humanoid') + '鲨鱼',
		
		'full-shark-level': toTextStyle('鲨鱼','shark') + '等级',
		
		'sharkoid-faith': toTextStyle('鲨之信念','humanoid'),

        'curr-top-0-req': x => `${toTextStyle('鱼','fish')}的总量达到 <b>${format(x)}</b>`, 
        'curr-top-0-reset': x => `获得 <b>${x.format(0)}</b> ${toTextStyle('重生','prestige')}碎片`,

        'curr-top-1-req': x => `${toTextStyle('重生','prestige')}碎片的总量达到 <b>${format(x)}</b>`, 
        'curr-top-1-reset': x => `进入地核，获得 <b>${x.format(0)}</b> ${toTextStyle('岩浆','core')}碎片`,

        'curr-top-2-req': x => `${toTextStyle('鱼','fish')}的数量达到 <b>${format(x)}</b>`, 
        'curr-top-2-reset': (x,next) => `将你的${toTextStyle('鲨鱼','shark')}进化成为 <b>${format(x,0)}</b> ${toTextStyle('类人','humanoid')}鲨鱼（下一个需要 <b>${format(next)}</b> ${toTextStyle('鱼','fish')})`,

        'radioactive-name': toTextStyle('辐射'+icon("radioactive"),'core'),
        
        // Tabs

        'tab-shark': toTextStyle('鲨鱼','shark'),
        'tab-options': "选项",
        'tab-auto': "自动化",
        'tab-research': toTextStyle('研究','prestige'),
        'tab-explore': "探索",

        'tab-core': toTextStyle('地核','core'),
        'tab-core-reactor': toTextStyle('地核','core')+"反应堆",
        'tab-core-radiation': toTextStyle('地核','core')+"辐射",
		'tab-core-assembler': toTextStyle('地核','core')+"生产线",

        'tab-evolution': toTextStyle('进化','humanoid'),
        'tab-shark-rank': toTextStyle('鲨鱼','shark') + "段位",
        'tab-evolution-tree': toTextStyle('进化','humanoid') + "树",
        'tab-evolution-goal': toTextStyle('进化','humanoid') + "目标",

        // Elements

        'fish-div': `你的${toTextStyle('鲨鱼','shark')}已经吃了 <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> 条鱼`,
        'shark-stats': `${toTextStyle('鲨鱼','shark')}状态<br>等级：<h4 id="shark-level">???</h4><br>段位：<h4 id="shark-tier">???</h4>`,

        'shark-elo-div': `${toTextStyle('鲨鱼','shark')}的战力为 <h3>${toTextStyle('0','humanoid','shark-elo')}</h3>.`,
        'shark-rank-div': `${toTextStyle('鲨鱼','shark')}的段位为 <h3 id="shark-rank">0</h3>.`,
        'shark-rank-req-div': `${toTextStyle('鲨鱼','shark')}的战力达到 <h4>${toTextStyle('0','humanoid','shark-rank-req')}</h4> 后升段。`,
        'shark-rank-note': `注意：鲨鱼段位在鲨鱼进化后重置。`,

        'option-title-1': "主要选项",
        'option-title-2': "记数法",
        'option-title-3': "确认",
        'option-title-4': "语言",

        'offline-speed': "加速计算",
        'offline-done': "完成",

        'radioactive-div': `${toTextStyle('地核','core')}已产生<h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> <span id="radioactive-gain"></span>.`,
        get 'radioactive-summary'() {
            var c = toTextStyle('地核','core'), rf = toTextStyle('鱼'+icon("radioactive"),'fish')
            return `
            <summary>${c}辐射实验</summary>
            进行地核辐射实验会强制进行一次${toTextStyle('地核','core')}重置。
            实验中所有的地核反应堆无效，${toTextStyle('鱼','fish')}、${toTextStyle('重生','prestige')}碎片和前四个海洋的资源产量都是原来的立方根。
            你的${toTextStyle('鲨鱼','shark')}在实验中只能吃被辐射污染的${rf}。<br>
            用被辐射污染的${rf}购买升级，能产生更多的${toTextStyle('辐射'+icon("radioactive"),'core')}，并获得更强的加成。
            `
        },
        'radioboost-div': `你拥有 <h3 id="radioactive-boost">0</h3> 个辐射加成`,
		
		'core-temp-div': `${toTextStyle('地核','core')}温度：<h3>${toTextStyle('6,150','core','core-temperature')}</h3>，辐射加成的效果提升 <h4 id="core-temp-effect">100%</h4>.`,
        'core-temp-after-div': `（进行${toTextStyle('地核','core')}重置后，${toTextStyle('地核','core')}温度为 <span id="core-temp-after">???</span>）`,

        'sharkoid-faith-div': `你拥有 <h3 id="sharkoid-faith-spent">0</h3> / <h3 id="sharkoid-faith-total">0</h3> ${toTextStyle('鲨之信念','humanoid')}.`,
        'respec-evolution-tree': `重置${toTextStyle('进化','humanoid')}树`,
        'rerun-evolution': `重置进化树，重新开始本次${toTextStyle('进化','humanoid')}`,

        // Upgrades

        'su-s1-req': "等级为 3",
        'su-s1-name': '鲨鱼之力',
        'su-s1-desc': `每升一级，吃${toTextStyle('鱼','fish')}的速度<b>+1</b>.`,

        'su-s2-req': "等级为 7",
        'su-s2-name': '敏捷鲨鱼',
        'su-s2-desc': `每升一级，${toTextStyle('鲨鱼','shark')}等级对吃${toTextStyle('鱼','fish')}数量基数的加成 <b>+1</b>.`,

        'su-s3-req': "等级为 15",
        'su-s3-name': '鲨鱼牙齿',
        'su-s3-desc': `每升一级，第一个${toTextStyle('鲨鱼','shark')}升级的指数增加<b>+50%</b>.`,

        'su-s4-req': "等级为 38",
        'su-s4-name': '鲨鱼指数',
        'su-s4-desc': `每升一级，${toTextStyle('鱼','fish')}的指数 <b>+1%</b>.`,
		
        'su-s5-req': "等级为 640",
        'su-s5-name': '鲨鱼辐射',
        'su-s5-desc': `每升一级，${toTextStyle('辐射'+icon("radioactive"),'core')}的产量 <b>x2</b>.`,
		
        'su-p1-req': "第一次重生",
        'su-p1-name': '鲨之巨力',
        'su-p1-desc': `每升一级，吃${toTextStyle('鱼','fish')}的速度<b>×3</b>.`,

        'su-p2-req': "第一次重生",
        'su-p2-name': '重生强化',
        'su-p2-desc': `每升一级，吃${toTextStyle('鱼','fish')}的数量<b>×lg(${toTextStyle('鱼','fish')})</b>.`,

        'su-p3-name': '鲨鱼鱼鳞',
        'su-p3-desc': `每升一级，第一个${toTextStyle('鲨鱼','shark')}升级价格折算的延迟 <b>+1</b>.`,

        // Researches

        'research-p1-name': "敏捷重生",
        'research-p1-desc': `“敏捷鲨鱼”以较低的幅度影响${toTextStyle("鲨鱼",'shark')}等级对${toTextStyle("重生",'prestige')}碎片的加成基数。`,

        'research-p2-name': "免费鲨鱼升级",
        'research-p2-desc': `用${toTextStyle("鱼",'fish')}购买的${toTextStyle("鲨鱼",'shark')}升级不再消耗${toTextStyle("鱼",'fish')}。`,

        'research-p3-name': "强化鲨鱼等级",
        'research-p3-desc': `${toTextStyle("鲨鱼",'shark')}等级的价格基数减 <b>1</b>, 每次购买后强制进行
		${toTextStyle("重生",'prestige')}，重置你的${toTextStyle("重生",'prestige')}碎片和${toTextStyle("重生",'prestige')}升级。
		解锁新的${toTextStyle("鲨鱼",'shark')}升级。`,

        'research-p4-name': "更好的重生",
        'research-p4-desc': `小幅提升获得${toTextStyle("重生",'prestige')}碎片的公式。`,

        'research-p5-name': "鲨之神力",
        'research-p5-desc': `${toTextStyle("鲨鱼",'shark')}等级从100起，每升一级，“鲨之巨力”增强 <b>1%</b>.`,

        'research-p6-name': "鱼鳞硬化",
        'research-p6-desc': `“鲨鱼鱼鳞”的效果是原来的<b>两倍</b>。`,

        'research-p7-name': "更好的资源 I",
        'research-p7-desc': `提升${toTextStyle("珊瑚",'coral')}和${toTextStyle("冰",'ice')}的效果`,
		
		'research-p8-name': "超强鲨鱼等级",
        'research-p8-desc': `再次将${toTextStyle("鲨鱼",'shark')}等级的价格基数继续减 1.`,

        'research-e1-name': "海洋协同 I",
        'research-e1-desc': `${toTextStyle("盐",'salt')}提升${toTextStyle("珊瑚",'coral')}的产量。`,

        'research-e2-name': "海洋协同 II",
        'research-e2-desc': `${toTextStyle("压缩雪花",'snow')}提升${toTextStyle("冰",'ice')}的产量。`,
		
		'research-e3-name': "自动探索",
        'research-e3-desc': `无需进行探索，自动更新前 <b>X</b> 个海洋的基数，<b>X</b> 为此${toTextStyle("研究",'prestige')}等级。`,

        'research-e4-name': "褐藻氧化",
        'research-e4-desc': `<b>氧</b>能增加${toTextStyle("褐藻",'kelp')}的产量。`,
		
		'research-e5-name': "自动探索 MK2",
        'research-e5-desc': `无需进行探索，自动更新印度洋的基数，进一步提升${toTextStyle('褐藻','kelp')}的效果。`,

        'research-c1-name': "研究保持",
        'research-c1-desc': `进入${toTextStyle('地核','core')}后保留${toTextStyle("研究",'prestige')}。`,

        'research-c2-name': "探索保持",
        'research-c2-desc': `进入${toTextStyle('地核','core')}后保留前 <b>X</b> 个海洋的解锁状态和下潜深度。`,

        'research-c3-name': "氖亲和性 I",
        'research-c3-desc': `<b>氖</b>可以影响“鲨鱼牙齿”、“鲨鱼指数”和“鲨鱼鱼鳞”的效果。`,

        'research-c4-name': "更好的镍",
        'research-c4-desc': `<b>镍</b>的效果是原来的<b>两倍</b>。`,
		
		'research-c5-name': "地核附加加成",
        'research-c5-desc': `地核辐射的第一项加成影响核心反应堆对${toTextStyle('鱼','fish')}的加成。`,

        'research-c6-name': "辐射防护",
        'research-c6-desc': `${toTextStyle('岩浆','core')}碎片降低地核辐射的上限。`,

        'research-c7-name': "鲨之巨齿",
        'research-c7-desc': `'鲨鱼牙齿'的效果是原来的 <b>2.5次幂</b>。`,
		
		'research-c8-name': "更好的铁和氖",
        'research-c8-desc': `<b>铁</b>的效果是原来的两倍，大幅降低<b>铁</b>和<b>氖</b>的价格。`,

        'research-c9-name': "更好的地核加成",
        'research-c9-desc': `提升地核反应堆对${toTextStyle('鱼','fish')}的加成。`,

        'research-c10-name': "高硬度鱼鳞",
        'research-c10-desc': `“鲨鱼鱼鳞”延迟第二个${toTextStyle('鲨鱼','shark')}升级的价格折算。`,

        'research-c11-name': "更好的辐射防护",
        'research-c11-desc': `提升“辐射防护”的效果。`,

        'research-c12-name': "绝佳的辐射防护",
        'research-c12-desc': `大幅度降低地核辐射的上限。`,

        // Exploration

        'explore-while': `探索时`,
        'explore-inside': (a,b,c)=>`基数：${a.format()}/秒`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/秒`+`<br> ${toTextStyle("鱼",'fish')}的最大数量达到${format(c,0)}.`,
        'explore-outside': x=>`当前基数：${x.format()}/秒<br>探索海洋！`,

        'explore-next': x=>`${toTextStyle("鲨鱼",'shark')}等级达到<h3>${format(x,0)}</h3>时，解锁新的海洋。`,

        'explore-doubler-1': x=>`获得双倍的${x}。`,
        'explore-doubler-2': `下潜速度加倍。`,

        'explore-0-name': `太平洋`,
        'explore-0-desc': `吃${toTextStyle('鱼','fish')}的速度是原来的平方根。`,
        'explore-0-milestone': [
            `获得${toTextStyle('重生','prestige')}碎片的数量是原来的1.05次幂。`,
            `${toTextStyle('鲨鱼','shark')}等级的平方根每增加 1, 下潜速度和资源产量增加 25%.`,
            `升级${toTextStyle('鲨鱼','shark')}不再消耗${toTextStyle('鱼','fish')}。`,
            `吃${toTextStyle('鱼','fish')}的速度是原来的1.05次幂。`,
            `解锁${toTextStyle('地核','core')}.`,
        ],

        'explore-1-name': `北冰洋`,
        'explore-1-desc': `重置你的${toTextStyle("重生",'prestige')}碎片和${toTextStyle("重生",'prestige')}升级。 获得${toTextStyle('重生','prestige')}碎片的数量是原来的平方根。`,
        'explore-1-milestone': [
            `解锁自动购买${toTextStyle('重生','prestige')}升级。`,
            `${toTextStyle('鲨鱼','shark')}等级的平方根每增加 1, 下潜速度和资源产量增加 25%.`,
            `升级${toTextStyle('鲨鱼','shark')}不再消耗${toTextStyle('重生','prestige')}碎片。`,
            `自动获得在${toTextStyle('重生','prestige')}时能获得的所有${toTextStyle('重生','prestige')}碎片。`,
        ],

        'explore-2-name': `大西洋`,
        'explore-2-desc': `重置你的${toTextStyle("重生",'prestige')}碎片和${toTextStyle("重生",'prestige')}升级。 ${toTextStyle('鲨鱼','shark')}等级的价格折算是原来的 10 倍。` ,
        'explore-2-milestone': [
            `轻微削弱“鲨鱼牙齿”和“鲨鱼指数”的价格折算。`,
            `${toTextStyle('鲨鱼','shark')}等级的平方根每增加 1, 下潜速度和资源产量增加 25%.`,
            `每下潜500米，${toTextStyle('鲨鱼','shark')}等级的第一次价格折算延迟 +1.`,
            `${toTextStyle("盐",'salt')}的效果提升 50%.`,
        ],

        'explore-3-name': `南冰洋`,
        'explore-3-desc': `重置你的${toTextStyle("重生",'prestige')}碎片和${toTextStyle("重生",'prestige')}升级。无法通过消耗${toTextStyle('鱼','fish')}和${toTextStyle('重生','prestige')}碎片购买对应的${toTextStyle('鲨鱼','shark')}升级。`,
        'explore-3-milestone': [
            `探索的基数 x10.`,
            `${toTextStyle('鲨鱼','shark')}等级的平方根每增加 1, 下潜速度和资源产量增加 25%.`,
            `${toTextStyle('压缩雪花','snow')}的效果提升 50%.`,
        ],

        'explore-4-name': `印度洋`,
        'explore-4-desc': `前四个海洋的效果始终生效，吃${toTextStyle('鱼','fish')}的指数是原来的 0.75 次幂。`,
        'explore-4-milestone': [
            `地核辐射的上限除以 1,000.`,
            `${toTextStyle('鲨鱼','shark')}等级的平方根每增加 1, 下潜速度和资源产量增加 25%.`,
            `地核反应堆的价格折算延迟 5.`,
            `提升${toTextStyle('褐藻','kelp')}的效果。`,
        ],

        // Core Reactor

        'core-0-name': `铁`,
        'core-0-desc': `基于<b>铁</b>的等级提升${toTextStyle("鱼",'fish')}的指数。`,

        'core-1-name': `镍`,
        'core-1-desc': `基于<b>镍</b>的等级提升${toTextStyle("重生",'prestige')}碎片的指数。`,

        'core-2-name': `氧`,
        'core-2-desc': `基于<b>氧</b>的等级提升反应堆产物对前四个海洋资源产量的加成。`,

        'core-3-name': `氖`,
        'core-3-desc': `基于<b>氖</b>的等级降低${toTextStyle("鲨鱼",'shark')}等级的价格。`,
		
		'core-4-name': `硫`,
        'core-4-desc': `基于<b>硫</b>的等级，${toTextStyle("鱼",'fish')}增强<b>铁</b>的效果。`,

        'core-5-name': `硅`,
        'core-5-desc': `基于<b>硅</b>的等级，${toTextStyle("重生",'prestige')}碎片增强<b>镍</b>的效果。`,

        'core-6-name': `氮`,
        'core-6-desc': `基于<b>氮</b>的等级，${toTextStyle("褐藻",'kelp')}增强<b>氧</b>的效果。`,

        'core-7-name': `氦`,
        'core-7-desc': `基于<b>氦</b>的等级，${toTextStyle("鲨鱼",'shark')}等级增强<b>氖</b>的效果。`,

        'core-bonus': x => `反应堆的产物将吃${toTextStyle("鱼",'fish')}的数量<h4>${formatMult(x)}</h4>.`,
		
		'core-assembler-erase': `移除模式`,
        'core-assembler-choose': `你选择了`,
        'core-assembler-building-stats': (s,p,m) => `强度 <b>${s}</b> | 已放置 <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m,x,mm) => `最大数量： ${mm} / ${m}<br>需要 ${format(x)} ${toTextStyle("岩浆",'core')}碎片`, 
        'ca-building-base': b => `【基础资源：${b}】`,
        'ca-building-temp': t => `地核温度提升 ${t}.`,
		
        // Core Radiation

        'cr-start': x=>x?"停止实验。":"开始实验。",

        'upgrade-cr': (gen,cost)=>`
        提升${toTextStyle('辐射'+icon("radioactive"),'core')}产量。<br>
        每秒产生 <b>${format(gen,0)}</b>.<br>
        价格：${format(cost,0)} ${toTextStyle('鱼'+icon("radioactive"),'fish')}`,

        'reset-cr': (inc)=>`重置${toTextStyle('辐射'+icon("radioactive"),'core')}数量，辐射上限 <b>${formatMult(inc,0)}</b>, 你还可以获得新的辐射加成或辐射升级。你需要达到辐射上限才能进行这项重置。`,

        'cr-boosts': [
            x=>`第一行地核反应堆的数量 <h4>+${format(x)}</h4>.`,
            x=>`获得${toTextStyle('岩浆','core')}碎片的量 <h4>${formatMult(x)}</h4>.`,
            x=>`前四个用${toTextStyle('鱼','fish')}购买的${toTextStyle('鲨鱼','shark')}升级的效果增强 <h4>${formatPercent(x.sub(1))}</h4>.`,
            x=>`${toTextStyle('鲨鱼','shark')}等级的第二次价格折算延迟 <h4>+${format(x)}</h4>.`,
            x=>`${toTextStyle('鲨鱼','shark')}等级对${toTextStyle('岩浆','core')}碎片加成的基数 <h4>+${format(x,3)}</h4>.`,
			x=>`${toTextStyle('鲨鱼','shark')}等级对${toTextStyle('鱼','fish')}的加成，其指数是原来的 <h4>${formatPow(x,3)}</h4>.`,
            x=>`前三个用${toTextStyle('重生','prestige')}碎片购买的${toTextStyle('鲨鱼升级','shark')}，效果提升 <h4>${formatPercent(x.sub(1))}</h4>.`,
			x=>`${toTextStyle('鲨鱼','shark')}等级使${toTextStyle('鲨鱼','shark')}战力 <h4>${formatMult(x)}</h4>.`,
        ],

        // Evolution Tree

        'evolution-tree-row': (r,a) => `<b>第 ${r} 行</b><br>可购买 ${a} 个`,
        'evolution-tree-ctn': [
            ["鱼之躯体", x=>`${toTextStyle('鱼','fish')}使${toTextStyle('鲨鱼','shark')}战力 <b>${formatMult(x)}</b>.`],
            ["重生之躯", x=>`${toTextStyle('重生','prestige')}碎片使${toTextStyle('鲨鱼','shark')}战力 <b>${formatMult(x)}</b>.`],
            ["辐射之躯", x=>`${toTextStyle('岩浆','core')}碎片使${toTextStyle('鲨鱼','shark')}战力 <b>${formatMult(x)}</b>.`],
            ["完美之躯", x=>`${toTextStyle('鲨鱼','shark')}战力 <b>${formatMult(x,0)}</b>.`],

            ["钢铁之鲨", x=>`<b>铁</b>的等级额外加 <b>${format(x,0)}</b>.`],
            ["无价之鲨", x=>`<b>镍</b>的等级额外加 <b>${format(x,0)}</b>.`],
            ["氧气之鲨", x=>`<b>氧</b>的等级额外加 <b>${format(x,0)}</b>.`],
            ["霓虹之鲨", x=>`<b>氖</b>的等级额外加 <b>${format(x,0)}</b>.`],

            ["马里亚纳海沟", x=>`移除在<b>太平洋</b>中下潜深度的上限，并增强<b>太平洋</b>的效果。`],
            ["里特克深渊", x=>`移除在<b>北冰洋</b>中下潜深度的上限，并增强<b>太平洋</b>的效果。`],
            ["密尔沃基深渊", x=>`移除在<b>大西洋</b>中下潜深度的上限，并增强<b>太平洋</b>的效果。`],
            ["南桑威奇海沟", x=>`移除在<b>南冰洋</b>中下潜深度的上限，并增强<b>太平洋</b>的效果。`],

            ["暴胀的鱼", x=>`${toTextStyle('鱼','fish')}的数量是原来的 <b>${format(x)}th</b> 次幂。`],
            ["过度重生", x=>`${toTextStyle('重生','prestige')}碎片的数量是原来的 <b>${format(x)}th</b> 次幂。`],
            ["地核高压", x=>`${toTextStyle("岩浆",'core')}碎片的数量是原来的 <b>${format(x)}th</b> 次幂。`],
            ["自制鲨鱼", x=>`${toTextStyle('类人','humanoid')}鲨鱼所需数量的基数降低 <b>${format(x,0)}</b>.`],

            ["化身为鲨", x=>`<b>硫</b>的等级额外加 <b>${format(x,0)}</b>.`],
            ["鲨之铠甲", x=>`<b>硅</b>的等级额外加 <b>${format(x,0)}</b>.`],
            ["太阳能鲨", x=>`<b>氮</b>的等级额外加 <b>${format(x,0)}</b>.`],
            ["海上飞鲨", x=>`<b>氦</b>的等级额外加 <b>${format(x,0)}</b>.`],

            ["巨物之躯", x=>`${toTextStyle('鱼','fish')}使<b>鱼之躯体</b>的效果变为原来的 <b>${formatPow(x)}</b>.`],
            ["转世之躯", x=>`${toTextStyle('重生','prestige')}碎片使<b>重生之躯</b>的效果变为原来的 <b>${formatPow(x)}</b>.`],
            ["超然之躯", x=>`${toTextStyle('岩浆','core')}碎片使<b>辐射之躯</b>的效果变为原来的 <b>${formatPow(x)}</b>.`],
            ["永恒之躯", x=>`<b>完美之躯</b>的效果是原来的<b>平方</b>。`],
        ],

        'evolution-goal-status': (x,y)=>x?"成功":y?"失败":"正在进行",
        'evolution-goal-ctn': [
            [
                x=>`第一次进入${toTextStyle("地核",'core')}时，获得至少 <b>${format(x,0)}</b> ${toTextStyle("岩浆",'core')}碎片。`,
                `每秒获得此时进入地核后获得的 <b>所有</b> ${toTextStyle("岩浆",'core')}碎片。`
            ],[
                x=>`不购买${toTextStyle("地核",'core')}生产线时，${toTextStyle("岩浆",'core')}碎片的总量达到 <b>${format(x,0)}</b>.`,
                `${toTextStyle('进化','humanoid')}后保留${toTextStyle("地核",'core')}生产线。`
            ],[
                x=>`${toTextStyle("岩浆",'core')}碎片的总量达到 <b>${format(x,0)}</b>.`,
                `进一步提升通过${toTextStyle('重生','prestige')}碎片获得${toTextStyle("岩浆",'core')}碎片的公式。`
            ],[
                x=>`在没有${toTextStyle('褐藻','kelp')}时，${toTextStyle('重生','prestige')}碎片的总量达到 <b>${format(x,0)}</b>.`,
                `任何重置开始时，所有海洋中的下潜深度均为最大值。`,
            ],[
                x=>`在没有任何海洋中的资源时，${toTextStyle('重生','prestige')}碎片的总量达到 <b>${format(x,0)}</b>.`,
                `${toTextStyle('进化','humanoid')}后保留研究。`,
            ],[
                x=>`${toTextStyle('重生','prestige')}碎片的总量达到 <b>${format(x,0)}</b>.`,
                `进一步提升获得${toTextStyle('重生','prestige')}碎片的公式。`,
            ],[
                x=>`购买不多于 <b>10</b> 个辐射上限升级时，${toTextStyle('鱼','fish')}的总量达到 <b>${format(x,0)}</b>.`,
                `购买辐射上限升级后不会重置${toTextStyle('辐射'+icon("radioactive"),'core')}相关的升级。重生开始时，每秒产生 1 辐射，${toTextStyle('辐射'+icon("radioactive"),'core')}的数量可以超过辐射上限。`,
            ],[
                x=>`不购买辐射上限升级时，${toTextStyle('鱼','fish')}的总量达到 <b>${format(x,0)}</b>.`,
                `购买辐射上限升级后不会重置辐射的数量，同时解锁自动提升辐射上限。`,
            ],[
                x=>`吃${toTextStyle('鱼','fish')}总量达到 <b>${format(x,0)}</b>.`,
                `${toTextStyle('鲨鱼','shark')}段位的第一次价格折算延迟 <b>5</b>.`,
            ],
        ],

        // Automation

        'auto-shark-name': `自动升级${toTextStyle("鲨鱼","shark")}`,
        'auto-su-name': `自动购买${toTextStyle("鱼","fish")}升级`,
        'auto-spu-name': `自动购买${toTextStyle("重生","prestige")}升级`,
        'auto-eu-name': `自动购买探索升级`,
		'auto-core_reactor-name': `自动购买${toTextStyle("地核","core")}反应堆`,
        'auto-core_radiation-name': `自动购买${toTextStyle("辐射","core")}提升`,
        'auto-radioactive_boosts-name': `自动提升${toTextStyle("辐射","core")}上限`,

        'auto-cost': (D,cost,name) => `冷却时间降低 ${formatReduction(D,0)}.<br>价格：${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `冷却时间：${format(a,3)} 秒`+(maxed ? "" :` ➜ ${format(b,3)} 秒`),

        // Progress

        'progress-0-text': r => `${toTextStyle('鱼','fish')}的总量达到 ${format(r)}`, 
        get 'progress-0-cond-text'() { return `进行一次${toTextStyle('重生','prestige')}` },

        'progress-1-text': r => `${toTextStyle('重生','prestige')}碎片达到 ${format(r)} 解锁自动化`,
        'progress-2-text': r => `${toTextStyle('重生','prestige')}碎片达到 ${format(r)} 解锁研究`,
        'progress-3-text': r => `${toTextStyle('鲨鱼','shark')}等级达到 ${format(r,0)} 解锁探索`,
        'progress-4-text': r => `在太平洋中下潜 ${format(r)} 米解锁${toTextStyle('地核','core')}`,

        'progress-5-text': r => `${toTextStyle('重生','prestige')}碎片的总量达到 ${format(r)}`, 
        get 'progress-5-cond-text'() { return `进入${toTextStyle('地核','core')}` },
		
		'progress-6-text': r => `${toTextStyle('岩浆','core')}碎片达到 ${format(r)} 解锁${toTextStyle('地核','core')}的下一个机制`, 
		'progress-7-text': r => `${toTextStyle('鲨鱼','shark')}等级达到 ${format(r,0)} 解锁新的海洋`, 
		'progress-8-text': r => `${toTextStyle('岩浆','core')}碎片达到 ${format(r)} 解锁${toTextStyle('地核','core')}的下一个机制`, 
        'progress-9-text': r => `吃${toTextStyle('鱼','fish')}总量达到 ${format(r)} 解锁新的${toTextStyle('地核','core')}反应堆`, 

		'progress-10-text': r => `吃${toTextStyle('鱼','fish')}总量达到${format(r)}`, 
        get 'progress-10-cond-text'() { return `${toTextStyle('鲨鱼','shark')}进化` },

        'progress-11-text': r => `${toTextStyle('类人','humanoid')}鲨鱼的数量达到 ${format(r,0)} 解锁${toTextStyle('进化','humanoid')}的下一个机制`, 

        'maxed-progress': "已解锁所有机制！",

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('重生','prestige'), s = toTextStyle('鲨鱼','shark'), f = toTextStyle('鱼','fish')
            return `
            <h3>${p}</h3><br>
            ${p}是第一层重置，它将重置你的${s}、${s}升级和${f}，获得${p}碎片。
            第一次${p}将解锁新的${s}升级。<br>
            <img src="textures/PrestigeShard.png"><br>
            你确定要重生吗？
            `
        },
        get 'reset-core-message'() {
            let c = toTextStyle('地核','core'), m = toTextStyle('岩浆','core'), p = toTextStyle('重生','prestige')
            return `
            <h3>${c}</h3><br>
			${c}是第二层重置。进入地核除了重置${p}所重置的资源，还重置${p}碎片、${p}升级、几乎所有的${toTextStyle('研究','prestige')}和探索进度，获得${m}碎片.
            第一次进入地核将解锁${c}反应堆。<br>
            <img src="textures/Magmatic.png"><br>
            你确定要进入地核吗？
            `
        },
        get 'reset-humanoid-message'() {
            let e = toTextStyle('进化','humanoid'), c = toTextStyle('地核','core'), m = toTextStyle('岩浆','core'), p = toTextStyle('重生','prestige')
            return `
            <h3>${e}</h3><br>
            <subtitle>“这些变异会让鲨鱼具有野性，它们将变成类人鲨鱼。不过，你需要献祭你曾获得的一切”</subtitle>
            ${e}是第三层重置。鲨鱼进化除了重置${c}所重置的资源，还重置${m}碎片、${c}反应堆、${c}辐射、${c}生产线，和一些与${toTextStyle('类人','humanoid')}鲨鱼相关的${toTextStyle('研究','prestige')}。
            第一次进行鲨鱼进化将解锁鲨鱼段位和${e}树。<br>
            <img src="textures/Evolution.png"><br>
            你确定要进行鲨鱼进化吗？
            `
        },

        // Other

        'upgrade-shark': x => `提升${toTextStyle('鲨鱼','shark')}等级<br>价格：${x.format(0)} ${toTextStyle('鱼','fish')}`,
        'shark-bonus-fish': x => `吃${toTextStyle('鱼','fish')}速度的基数+${x.format(0)}`,
        'shark-bonus-prestige': x => `${formatMult(x)} ${toTextStyle('重生','prestige')}碎片`,
        'shark-bonus-core': x => `${formatMult(x)} ${toTextStyle('岩浆','core')}碎片`,
		//'shark-bonus-rad': x => `${formatMult(x)} ${toTextStyle('辐射' + icon("radioactive"),'核心')}`,

        'shark-rank-bonuses': {
            fish: x => `${toTextStyle('鱼','fish')}的数量是原来的${formatPow(x)}`,
            prestige: x => `${toTextStyle('重生','prestige')}碎片的数量是原来的${formatPow(x)}`,
        },

        'level': "等级",
        'effect': "效果",
        'cost': "价格",
        'buyMax': "购买最大数量",
        'require': "需要",
        'next-at': "下一个需要",
        'depth': "深度",
		'reward': "奖励",

        'offline-time-text': x=>`您离线了 <b>${formatTime(x,0)}</b>.`,

        'research-afford': bool => bool ? "购买" : "无法购买",
        'research-bought': bool => bool ? `<b>已购买</b>` : `<b>未购买</b>`,

        'off-on': bool => bool ? "开" : "关",

        'popup-buttons': [
            ["是","否"],
            ["确认","取消"],
        ],

        'popup-desc' : {
            import: `在此粘贴你的存档。警告：这将覆盖你当前的存档！`,
            wipe: `你确定要删除存档吗？请输入 "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
        },

        'notify-desc' : {
            save: "游戏已保存",
        },

        'radio-desc' : {
            'notation': ['记数法',['科学','标准','混合科学']],
            'comma-format': ['使用逗号表示的最大位数',['3','6','9','12','15']],
            'autosave': ['自动存档',['禁用','启用']],
            'autosave-time': ['自动存档时间',['15 秒','30 秒','60 秒','120 秒']],
            'offline': ['离线进度',['禁用','启用']],
        },

        'radio-desc-default' : ['禁用','启用'],

        'prompt-placeholder': "请输入文本……",

        'option-buttons-text': ["存档","导出到剪贴板","导出到文件","导入存档文本","导入存档文件","删档！！！",'加入Discord服务器','在Boosty支持开发者'],

        'confirm-prestige': "重生",
        'confirm-core': "进入地核",
		'confirm-humanoid': "鲨鱼进化",
    },
}
