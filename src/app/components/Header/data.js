import logo from './img.jpg';

const data = {
	en: {
		name: 'Gediminas Luksas',
		contacts: {
			phone: {
				lable: 'Phone: ',
				value: '+37065531346',
			},
			dateofbirth: {
				lable: 'Date of Birth: ',
				value: '02 August 1984',
			},
			email: {
				lable: 'Email: ',
				value: 'gediminasluksas@gmail.com',
			},
		},
		summary:
			'Flexible, polite, responsible, problem-solving attitude, aims to reach the goals. Communicative, friendly and open-minded person.',
		picture: {
			alt: 'Avatar foto',
			src: logo,
		},
	},
	lt: {
		name: 'Gediminas Lukšas',
		contacts: {
			phone: {
				lable: 'Numeris: ',
				value: '+37065531346',
			},
			dateofbirth: {
				lable: 'Gimimo data: ',
				value: '1984 rugpjūčio 2d',
			},
			email: {
				lable: 'Elektroninis paštas: ',
				value: 'gediminasluksas@gmail.com',
			},
		},
		summary:
			'Lankstus, mandagus, atsakingas, sprendžiantis problemas, siekiantis tikslų, komunikabilus, draugiškas ir atviras žmogus.',
		picture: {
			alt: 'Avatar foto',
			src: logo,
		},
	},
};
export default data;
