const prod = process.env.NODE_ENV === 'production';

const config = {
	url: {
		apiHost: 'http://localhost:81',
	},
};

if (prod) {
	config.url.apiHost = 'http://matcha.riz.ky:81';
}

export default config;