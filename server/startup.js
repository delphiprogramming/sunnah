Meteor.startup(function () {
	// Setup services from settings json provided
	var services = Meteor.settings.services;
	if (services) {
		for (var k in services) {
			var svc = {};
			if (services.hasOwnProperty(k)) {
				svc['service'] = k;
				for (var i in services[k]) {
					if (services[k].hasOwnProperty(i)) {
						svc[i] = services[k][i];
					}
				}
			}
			Accounts.loginServiceConfiguration.remove({service: svc['service']});
			Accounts.loginServiceConfiguration.insert(svc);
		}
	}
	
	// Check Databases and give starter data if empty
	if (People.find({}).count() === 0) {
		console.log('** People database empty, filling some example entries.');
		People.insert({name:{ar:"",en:"Prophet Muhammad ﷺ",id:""},slug:"muhammad",born:"-52",died:"11",era:"0"});
		ab = People.insert({name:{ar:"",en:"Abu Bakr as-Saddiq",id:""},slug:"abubakr",born:"-50",died:"13",era:"1"});
		um = People.insert({name:{ar:"",en:"Umar ibn al-Khattab",id:""},slug:"umar",born:"-39",died:"24",era:"1"});
		People.insert({name:{ar:"",en:"Uthman ibn Affan",id:""},slug:"uthman",born:"-46",died:"35",era:"1"});
		People.insert({name:{ar:"",en:"Ali ibn Abi Talib",id:""},slug:"ali",born:"-24",died:"40",era:"1"});
		People.insert({name:{ar:"",en:"Hasan al-Basri",id:""},slug:"hasan-albasri",born:"20",died:"110",era:"2"});
		People.insert({name:{ar:"",en:"Abu Hanifa",id:""},slug:"abu-hanifa",born:"79",died:"149",era:"2"});
		People.insert({name:{ar:"",en:"Malik ibn Anas",id:""},slug:"imam-malik",born:"92",died:"178",era:"3"});
		People.insert({name:{ar:"",en:"Muhamad ibn Idris ash-Shafi'i",id:""},slug:"imam-shafii",born:"149",died:"203",era:"3"});
		People.insert({name:{ar:"",en:"Ahmed ibn Hanbal",id:""},slug:"imam-ahmed",born:"163",died:"240",era:"4"});
		People.insert({name:{ar:"",en:"Muhammad ibn Ismail Bukhari",id:""},slug:"imam-bukhari",born:"194",died:"256",era:"4"});
		People.insert({name:{ar:"",en:"Abu Zakaria Yahya Ibn Sharaf al-Nawawi",id:""},slug:"imam-nawawi",born:"630",died:"676",era:"4"});
		People.insert({name:{ar:"",en:"Ibn Taymiyyah",id:""},slug:"ibn-taymiyyah",born:"661",died:"728",era:"5"});
		People.insert({name:{ar:"",en:"Ibn al-Qayyim",id:""},slug:"ibn-alqayyim",born:"691",died:"751",era:"5"});
		People.insert({name:{ar:"",en:"Muhammad ibn Abdulwahhab",id:""},slug:"abdulwahhab",born:"1114",died:"1206",era:"5"});
		People.insert({name:{ar:"",en:"Abdurrahman ibn Nasir as-Sa'di",id:""},slug:"abdurrahman-assadi",born:"1307",died:"1376",era:"6"});
		People.insert({name:{ar:"",en:"Muhammad ibn al-Uthaymeen",id:""},slug:"uthaymeen",born:"1347",died:"1421",era:"6"});
	}
	if (Quotes.find({}).count() === 0) {
		console.log('** Quotes database empty, filling some example entries.');
		Quotes.insert({name:ab,quote:"I am not going to leave anything that the Messenger of Allah (ﷺ) used to do but I will do it too, because I am afraid that if I leave anything that he used to do, I will go astray.",source:"Sahih Muslim, 1759"});
		Quotes.insert({name:um,quote:"There is no good in a people who do not advise one another and there is no good in those who do not love advice. The best of companions are those who mutually love and advise one another.",source:"Risalat al-Mustarshideen"});
		Quotes.insert({name:um,quote:"Do not think about a word that exits from a Muslim’s mouth except that you interpret it in the best manner.",source:"Ameelah, p. 395"});
	}

	// Start SyncedCron for SNAP
	SyncedCron.start();

});

// analytics.page('page name')
// analytics.track('Bought Ticket', {
//  eventName: 'Wine Tasting',
//  couponValue: 50,
//});
