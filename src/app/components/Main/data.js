const education = {
	en: {
		lable: 'Education',
		school:
			'Higher Education Diploma, The Professional Bachelor`s degree of Theatre Stydies, Professional Qualification of Teacher.',
		major: {
			lable: 'Main field(s) of study for the qualification: ',
			value: 'Theatre Studies - Dance Pedagogy, specialization - Modern Dance Expression',
		},
		subtitle2: '2004.09 - 2007.07',
		lableCodeAcademy: 'Education',
		schoolCodeAcademy: 'CodeAcademy',
		majorCodeAcademy: {
			lable: 'Qualification: ',
			value: 'Front End programming course',
		},
	},
	lt: {
		lable: 'Išsilavinimas',
		school:
			'Aukštojo mokslo diplomas, teatro profesinio bakalauro kvalifikacinis laipsnis, mokytojo profesinė kvalifikacija.',
		major: {
			lable: 'Studujų kryptis(-ys), studijų programos pavadinimas: ',
			value:
				'Teatras, studijų programa - Šokio pedagogika, specializacija - pramoginio mados šokio raiška.',
		},
		subtitle2: '2004.09 - 2007.07',
		lableCodeAcademy: 'Išsilavinimas',
		schoolCodeAcademy: 'CodeAcademy',
		majorCodeAcademy: {
			lable: 'Išsilavinimas: ',
			value: 'Front End programavimo kursas.',
		},
	},
};

const skills = {
	en: {
		lableSkills: 'Skills',
		subtitle: '2018.10 - 2019.06',
		list: [
			{
				responsibilities: [
					'HTML',
					'CSS/SCSS',
					'Bootstrap',
					'Node.js',
					'JavaScript',
					'React.js',
					'Vue.js',
				],
			},
		],
	},
	lt: {
		lableSkills: 'Patirtis',
		subtitle: '2018.10 - 2019.06',
		list: [
			{
				responsibilities: [
					'HTML',
					'CSS/SCSS',
					'Bootstrap',
					'Node.js',
					'JavaScript',
					'React.js',
					'Vue.js',
				],
			},
		],
	},
};

const work = {
	en: {
		lableWork: 'Work experience',
		subtitles: '2014.11 - 2019.10',
		work: 'UAB City Service Engineering',
		position: {
			lable: 'Work Manager: ',
			value:
				'Organise and plan the work of service stuff: - identify work areas; - make short-term (daily) and long-term (weekly) working plans for stuff; - create work schedules. Manage the whole documentation related with work safety, warehouse and etc. Supervise work quality and work discipline;',
		},
	},
	lt: {
		lableWork: 'Darbo patirtis',
		subtitles: '2014.11 - 2019.10',
		work: 'UAB City Service Engineering',
		position: {
			lable: 'Darbų vykdytojas: ',
			value:
				'- Vadovauti aptarnaujančio personalo veiklai, prižiūrėti jų darbo kokybę bei darbo drausmę. - Organizuoti aptarnaujančio personalo darbą:nustatyti darbo plotus; sudaryti trumpalaikį(dienos) ir ilgalaikį(savaitės) darbo planą darbininkams; sudaryti darbo grafikus aptarnaujančiam personalui. - Tvarkyti veiklos, darbų saugos, sandėlio dokumentus.',
		},
	},
};

const hobies = {
	en: {
		lableHobies: 'Hobbies',
		value: 'Playing Football, Programming, Mentoring, Reading, Going to the gym, Travelling.',
	},
	lt: {
		lableHobies: 'Pomėgiai',
		value:
			'Futbolas, kompiuteriai, mentorystė, skaitymas, lankymasis sporto salėje, kelionės, saviugda.',
	},
};

const references = {
	en: {
		lableRef: 'Languages',
		valueEn: 'English: B2',
		valueRu: 'Russian: B1',
	},
	lt: {
		lableRef: 'Kalbos',
		valueEn: 'Anglų kalba: B2',
		valueRu: 'Rusų kalba: B1',
	},
};
export default { education, skills, work, hobies, references };
