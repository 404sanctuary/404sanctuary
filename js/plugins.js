// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.23 核心引擎","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"314","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_StatusMenuCore","status":true,"description":"v1.01a 身份状态菜单核心","parameters":{"---Settings---":"","Command Order":"General Parameters Elements States Attributes Custom Cancel","Command Window Width":"240","Command Window Rows":"4","Command Alignment":"center","---General---":"","General Command":"General","Parameters Text":"Parameters","Experience Text":"Experience","Total Format":"Total %1 for Next %2","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","---Parameters---":"","Parameters Command":"Parameters","Graph Text":"Parameter Graph","ATK Color":"#ed1c24 #f26c4f","DEF Color":"#f7941d #fdc689","MAT Color":"#605ca8 #bd8cbf","MDF Color":"#448ccb #a6caf4","AGI Color":"#39b54a #82ca9c","LUK Color":"#fff568 #fffac3","---Resist Colors---":"","Above 300%":"10","200% to 300%":"20","150% to 200%":"14","120% to 150%":"6","100% to 120%":"0","80% to 100%":"24","50% to 80%":"29","1% to 50%":"23","Exactly 0%":"31","Below 0%":"27","---Elements---":"","Elements Command":"Elements","Elements Decimal":"2","Element Column 1":"1","Element Column 2":"2 3 4 5 6 7 8 9","Element Column 3":"","Element Column 4":"","---State---":"","States Command":"States","States Decimal":"2","States Column 1":"1 4 5 6","States Column 2":"7 8 9 10","States Column 3":"","States Column 4":"","---Attributes---":"","Attributes Command":"Attributes","Attribute Font Size":"20","Attribute Decimal":"0","Attributes Column 1":"exr hit eva cri cev mev mrf cnt","Attributes Column 2":"mcr tcr pdr mdr fdr grd rec pha","Attributes Column 3":"hrg mrg trg tgr","Attributes Column 4":"","hit Name":"Hit Rate","eva Name":"Evasion Rate","cri Name":"Critical Hit Rate","cev Name":"Critical Evasion Rate","mev Name":"Magic Evasion Rate","mrf Name":"Magic Reflect Rate","cnt Name":"Counter Rate","hrg Name":"HP Regen Rate","mrg Name":"MP Regen Rate","trg Name":"TP Regen Rate","tgr Name":"Aggro Rate","grd Name":"Guard Effect","rec Name":"Recovery Effect","pha Name":"Pharmacology Effect","mcr Name":"MP Cost Rate","tcr Name":"TP Charge Rate","pdr Name":"Physical Damage Rate","mdr Name":"Magical Damage Rate","fdr Name":"Floor Damage Rate","exr Name":"Experience Rate"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.43a 战斗引擎核心","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"0","Magical Animation":"0","Enemy Attack Animation":"0","Reflect Animation":"0","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_BuffsStatesCore","status":true,"description":"v1.12a 效果状态核心","parameters":{"---Turn Indicator---":"","Show Turns":"true","Font Size":"16","Turn Alignment":"right","Turn Buffer X":"-3","Turn Buffer Y":"-6","State Color":"0","Buff Color":"24","Debuff Color":"2","---Enemy Icons---":"","Show Enemy Icons":"true","Enemy Buff Turn":"true","Enemy State Turn":"true","Enemy State Counter":"true","---Buff Settings---":"","Default Limit":"4","Maximum Limit":"8","Buff Formula":"this._buffs[paramId] * 0.25 + 1.0","Show Buff Rate":"false","---State Settings---":"","Reapply Rules":"1","Show Enemy Turns":"true","---Counter Settings---":"","Counter Font Size":"16","Counter Alignment":"center","Counter Buffer X":"0","Counter Buffer Y":"8","Counter Color":"0"}},
{"name":"YEP_EquipCore","status":true,"description":"v1.16 装备核心","parameters":{"---General---":"","Text Align":"center","Finish Command":"Finish","Remove Text":"Remove","Remove Icon":"16","Empty Text":"<Empty>","Empty Icon":"16","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5"}},
{"name":"YEP_ItemCore","status":true,"description":"v1.26 物品核心","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_ShopMenuCore","status":true,"description":"v1.03 商店菜单核心","parameters":{"---General---":"","Command Order":"Buy Sell Equip Custom Cancel","Shop List Width":"Graphics.boxWidth / 2 + Graphics.boxWidth / 10","Command Alignment":"center","---Status Window---":"","Default Mode":"actor","Stat Switching":"true","Cannot Equip":"Can't Equip","Stat Font Size":"20","Cannot Equip Font Size":"20","---Info Window---":"","Show Icon":"true","Icon Size":"128","Font Size":"20","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4"}},
{"name":"YEP_AbsorptionBarrier","status":true,"description":"v1.05 吸收屏障","parameters":{"Barrier State":"0","Barrier Color 1":"13","Barrier Color 2":"5","Barrier Animation":"121","Break Animation":"122","Barrier Popup":"255, 0, 255, 160","Display 0 HP Damage":"false","Clear Per Battle":"true","Clear on Death":"true","Default Penetration Rate":"0","Default Penetration Flat":"0"}},
{"name":"YEP_EventChasePlayer","status":true,"description":"v1.05 事件追逐","parameters":{"Sight Lock":"300","See Player":"true","Alert Timer":"120","Alert Balloon":"1","Alert Sound":"Computer","Alert Common Event":"0","Return After":"true","Return Wait":"180"}},
{"name":"YEP_HitAccuracy","status":true,"description":"v1.02 命中率","parameters":{"---Formula---":"","Accuracy Formula":"skillHitRate * (userHitRate - targetEvadeRate)","Evade Formula":"0","---User Hit Rate---":"","User Physical Hit":"user.hit","User Magical Hit":"1.00","User Certain Hit":"1.00","---Target Evade Rate---":"","Target Physical Evade":"target.eva","Target Magical Evade":"target.mev","Target Certain Evade":"0.00"}},
{"name":"YEP_KeyboardConfig","status":true,"description":"v1.01 按键设置","parameters":{"---General---":"","Command Name":"Keyboard Config","Button Events":"1 2 3","---Help Text---":"","Key Help":"Change the configuration of this key?","Default Layout":"Default Keyboard Layout","Default Help":"Reverts your keyboard setting to the default setup.","WASD Layout":"WASD Movement Layout","WASD Help":"Changes your keyboard to WASD movement.","Finish Config":"Finish Configuration","Finish Help":"Are you done configuring your keyboard?","Assigned Color":"21","Action Color":"4","Clear Text":"Clear","---Key Names---":"","OK Key":"OK","OK Text":"OK / Talk","Escape Key":"X","Escape Text":"Cancel / Menu","Cancel Key":"Cancel","Cancel Text":"Cancel","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Dash","Shift Text":"Dash","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Move ◄ Left","Up Key":"▲","Up Text":"Move ▲ Up","Right Key":"►","Right Text":"Move ► Right","Down Key":"▼","Down Text":"Move ▼ Down"}},
{"name":"YEP_SaveEventLocations","status":true,"description":"v1.04 事件位置存储","parameters":{}},
{"name":"YEP_RegionEvents","status":true,"description":"v1.02 事件区域","parameters":{"Region 1":"0","Region 2":"0","Region 3":"0","Region 4":"0","Region 5":"0","Region 6":"0","Region 7":"0","Region 8":"0","Region 9":"0","Region 10":"0","Region 11":"0","Region 12":"0","Region 13":"0","Region 14":"0","Region 15":"0","Region 16":"0","Region 17":"0","Region 18":"0","Region 19":"0","Region 20":"0","Region 21":"0","Region 22":"0","Region 23":"0","Region 24":"0","Region 25":"0","Region 26":"0","Region 27":"0","Region 28":"0","Region 29":"0","Region 30":"0","Region 31":"0","Region 32":"0","Region 33":"0","Region 34":"0","Region 35":"0","Region 36":"0","Region 37":"0","Region 38":"0","Region 39":"0","Region 40":"0","Region 41":"0","Region 42":"0","Region 43":"0","Region 44":"0","Region 45":"0","Region 46":"0","Region 47":"0","Region 48":"0","Region 49":"0","Region 50":"0","Region 51":"0","Region 52":"0","Region 53":"0","Region 54":"0","Region 55":"0","Region 56":"0","Region 57":"0","Region 58":"0","Region 59":"0","Region 60":"0","Region 61":"0","Region 62":"0","Region 63":"0","Region 64":"0","Region 65":"0","Region 66":"0","Region 67":"0","Region 68":"0","Region 69":"0","Region 70":"0","Region 71":"0","Region 72":"0","Region 73":"0","Region 74":"0","Region 75":"0","Region 76":"0","Region 77":"0","Region 78":"0","Region 79":"0","Region 80":"0","Region 81":"0","Region 82":"0","Region 83":"0","Region 84":"0","Region 85":"0","Region 86":"0","Region 87":"0","Region 88":"0","Region 89":"0","Region 90":"0","Region 91":"0","Region 92":"0","Region 93":"0","Region 94":"0","Region 95":"0","Region 96":"0","Region 97":"0","Region 98":"0","Region 99":"0","Region 100":"0","Region 101":"0","Region 102":"0","Region 103":"0","Region 104":"0","Region 105":"0","Region 106":"0","Region 107":"0","Region 108":"0","Region 109":"0","Region 110":"0","Region 111":"0","Region 112":"0","Region 113":"0","Region 114":"0","Region 115":"0","Region 116":"0","Region 117":"0","Region 118":"0","Region 119":"0","Region 120":"0","Region 121":"0","Region 122":"0","Region 123":"0","Region 124":"0","Region 125":"0","Region 126":"0","Region 127":"0","Region 128":"0","Region 129":"0","Region 130":"0","Region 131":"0","Region 132":"0","Region 133":"0","Region 134":"0","Region 135":"0","Region 136":"0","Region 137":"0","Region 138":"0","Region 139":"0","Region 140":"0","Region 141":"0","Region 142":"0","Region 143":"0","Region 144":"0","Region 145":"0","Region 146":"0","Region 147":"0","Region 148":"0","Region 149":"0","Region 150":"0","Region 151":"0","Region 152":"0","Region 153":"0","Region 154":"0","Region 155":"0","Region 156":"0","Region 157":"0","Region 158":"0","Region 159":"0","Region 160":"0","Region 161":"0","Region 162":"0","Region 163":"0","Region 164":"0","Region 165":"0","Region 166":"0","Region 167":"0","Region 168":"0","Region 169":"0","Region 170":"0","Region 171":"0","Region 172":"0","Region 173":"0","Region 174":"0","Region 175":"0","Region 176":"0","Region 177":"0","Region 178":"0","Region 179":"0","Region 180":"0","Region 181":"0","Region 182":"0","Region 183":"0","Region 184":"0","Region 185":"0","Region 186":"0","Region 187":"0","Region 188":"0","Region 189":"0","Region 190":"0","Region 191":"0","Region 192":"0","Region 193":"0","Region 194":"0","Region 195":"0","Region 196":"0","Region 197":"0","Region 198":"0","Region 199":"0","Region 200":"0","Region 201":"0","Region 202":"0","Region 203":"0","Region 204":"0","Region 205":"0","Region 206":"0","Region 207":"0","Region 208":"0","Region 209":"0","Region 210":"0","Region 211":"0","Region 212":"0","Region 213":"0","Region 214":"0","Region 215":"0","Region 216":"0","Region 217":"0","Region 218":"0","Region 219":"0","Region 220":"0","Region 221":"0","Region 222":"0","Region 223":"0","Region 224":"0","Region 225":"0","Region 226":"0","Region 227":"0","Region 228":"0","Region 229":"0","Region 230":"0","Region 231":"0","Region 232":"0","Region 233":"0","Region 234":"0","Region 235":"0","Region 236":"0","Region 237":"0","Region 238":"0","Region 239":"0","Region 240":"0","Region 241":"0","Region 242":"0","Region 243":"0","Region 244":"0","Region 245":"0","Region 246":"0","Region 247":"0","Region 248":"0","Region 249":"0","Region 250":"0","Region 251":"0","Region 252":"0","Region 253":"0","Region 254":"0","Region 255":"0"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.03 限制进出区域","parameters":{"Player Restrict":"0","Event Restrict":"0","All Restrict":"0","Player Allow":"0","Event Allow":"0","All Allow":"0"}},
{"name":"YEP_X_BattleStatistics","status":true,"description":"v1.01 战斗统计","parameters":{"Command Name":"Statistics","Battle Count Text":"Battles Initiated","Battle Count Format":"%1 out of %2 Battles (%3%)","Kill Count Text":"Kills","Kill Count Format":"%1 Kills per Battle","Death Count Text":"Deaths","Death Count Format":"%1 Deaths per Battle","Assist Count Text":"Assists","Assist Count Format":"%1 Assists per Battle","Damage Dealt":"Damage Dealt","Damage Taken":"Damage Taken","Healing Dealt":"Healing Performed","Healing Taken":"Healing Received"}},
{"name":"YEP_X_BattleSysCTB","status":true,"description":"v1.15 行动顺序战斗系统","parameters":{"---CTB Settings---":"","Per Tick":"user.agi","Initial Speed":"0","Full Gauge":"Math.max(7000, BattleManager.highestBaseAgi() * 120)","Pre-Emptive Bonuses":"0.8","Surprise Bonuses":"0.8","---Escape---":"","Escape Ratio":"0.125 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.025","---Turn---":"","Full Turn":"Math.min(200, BattleManager.lowestBaseAgi() * 8)","---Rubberband---":"","Enable Rubberband":"true","Minimum Speed":"0.5 * BattleManager.highestBaseAgi()","Maximum Speed":"1.5 * BattleManager.highestBaseAgi()","---Sound---":"","Ready Sound":"Decision1","Ready Volume":"90","Ready Pitch":"120","Ready Pan":"0","---Turn Order---":"","Show Turn Order":"true","Icon Size":"32","Position Y":"54","Position X":"right","Turn Direction":"left","Ally Border Color":"4","Ally Back Color":"22","Ally Icon":"0","Enemy Border Color":"2","Enemy Back Color":"19","Enemy Icon":"0","Enemy SV Battlers":"false"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.06 血量槽外观","parameters":{"---General---":"","Display Actor":"true","Defeat First":"false","Always Visible":"false","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"false","Show Max":"false"}},
{"name":"EnemyBook","status":true,"description":"Displays detailed statuses of enemies.","parameters":{"Unknown Data":"??????"}},
{"name":"WeaponSkill","status":true,"description":"Change skill id of attack for each weapon.","parameters":{}},
{"name":"Galv_QuestLog(C)","status":false,"description":"(v.1.3) Galv的任务系统插件","parameters":{"文件":"Quests","文件夹":"data","分隔符号":",","- 设置 -":"","文字大小":"22","任务类别目录（主任务，副本，其他）":"Main Quests|#ffcc66,Side Quests|#ffff99,Crafting Quests|#ccccff","-- 图标 --":"","图标：未完成任务":"163","图标：已完成":"164","图标：任务失败":"162","图标：跟踪任务":"88","-- 词汇 --":"","任务命令":"Quest Log","已开始的任务":"Active","已完成的任务":"Complete","失败的任务":"Failed","描述":"Details","目标":"Objectives","难度":"Level","无跟踪任务":"No Quest Selected","-- 其他设置 --":"","提示窗口显示的位置":"20,20","提示窗口显示时长":"130","提示：新任务":"New Quest:","提示：已完成任务":"Quest Completed:","提示：已失败任务":"Quest Failed:","提示：新的目标":"New Objective:","提示：已完成目标":"Objective Completed:","提示：已失败目标":"Objective Failed:"}},
{"name":"GALV_TimedMessagePopups","status":true,"description":"(v.1.7) Display popup message boxes on screen that do not stop gameplay and auto close after a set time.","parameters":{"Y Offset":"-60","Default Windowskin":"Window","Use Arrows":"true","Windowskin Back Opacity":"255","Text Outline Width":"0"}},
{"name":"Galv_QuestLog","status":true,"description":"(v.1.3) A system to track quests/sidequests in your RPG.","parameters":{"File":"Quests","Folder":"data","Separator Character":",","- OPTIONS -":"","Font Size":"22","Categories":"主线任务|#ffcc66,支线任务|#ffff99,其他|#ccccff","-- ICONS --":"","Not Complete Icon":"163","Complete Icon":"164","Failed Icon":"162","Tracked Quest Icon":"88","-- VOCAB --":"","Quest Command":"任务列表","Active Cmd Txt":"进行中","Completed Cmd Txt":"已完成","Failed Cmd Txt":"已失败","Desc Txt":"详情","Objectives Txt":"目标","Difficulty Txt":"难度等级","No Tracked Quest":"未选择","-- EXTRA --":"","Pop XY":"20,20","Pop Time":"130","Pop New Quest":"新任务","Pop Complete Quest":"任务完成","Pop Fail Quest":"任务失败","Pop New Objective":"新目标","Pop Complete Objective":"目标完成","Pop Fail Objective":"目标失败"}}
];
