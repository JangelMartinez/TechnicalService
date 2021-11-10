const api = {
	endpoint: 'http://127.0.0.1:3000/',

	save_token: function(token){
		localStorage.setItem("token", token);
	},

	get_token: function(){
		if( localStorage.getItem("token") == null){
			return false;
		}else{
			return localStorage.getItem("token");
		}
	},

	remove_token: function(){
		localStorage.removeItem("token");
	},

	post: async function(method, obj={}, type="POST"){

		// Preparamos el endpoint
			const url = this.endpoint+method;
			console.log(url);

		// Hacemos la petición
			const response = await fetch(url,{
				method: type,
				headers: {
					'Content-Type': 'application/json',
					'token': this.get_token()
				},
				redirect: 'follow',
				body: JSON.stringify(obj)
			});

			if(response.status !== 200){ window.location = "/"; }

			console.log('response api',response);
		return response.json();

	},

	get: async function(method, obj={}){

		// Pasamos los argumentos a la URL
			const query = Object.keys(obj).map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k])).join("&");
			
		// Preparamos el endpoint
			const url = this.endpoint+method+"?"+query;

		// Hacemos la petición
			const response = await fetch(url,{
				method: "GET",
				headers: {
					'Content-Type': 'application/json',
					'token': this.get_token()
				},
				redirect: 'follow',
			});

			if(response.status !== 200){ window.location = "/"; }

		//console.log(response.json);
		return response.json();

	},

	put: function(method, obj={}){
		return this.post(method, obj, "PUT");
	}

};

export default api;