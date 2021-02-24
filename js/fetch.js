function getRequest(){

	// Connection avec un serveur distant Heroku - 
	//Pour utiliser le serveur distant décommentez la ligne suivante et commentez la ligne locale "http://127.0.0.1:3000/https://p5ochphil.herokuapp.com"
	 const fetchPromise = fetch("https://p5ochphil.herokuapp.com/api/cameras");
	//Connection avec un serveur local (Par défaut)
	//const fetchPromise = fetch("http://127.0.0.1:3000/api/cameras");
	const inputJS = document.getElementById("produits");
	
	fetchPromise.then(response => {//on exécute la promesse
	  return response.json(); // on récupère le résultat sous format json
	})
	.then((data => {
	  data.forEach((item)  => { //pour chaque item récupéré de l'API, on crée les constantes name, price_id etc..
		const { name, price, _id, description, imageUrl } = item;
				//puis on affiche ces informations dans le conteneur HTML
				inputJS.innerHTML +=`
				<div class="container col-md-6 col-lg-4">
				   <div class="affichage_produit mt-4 card bg-white">
					  <img class=”card-img-top” src="${imageUrl}"  alt="appareil ${name}">
					  <div class="card-body">
						 <h3 class="card-title">${name}</h3>
						  <span>${price/100}€</span></p>
						 <p class="card-text product-description">${description}</p>
						 <div class="text-center mt-4" ><a id="bouton" type="button" class="btn btn-secondary text-white" onclick="window.location.href = './produit.html?id=${_id}'">Choisir</a></div>
					  </div>
				   </div>
				</div>`
	   })
	}))
	
	}

	
	getRequest()
	cartNumber()
	