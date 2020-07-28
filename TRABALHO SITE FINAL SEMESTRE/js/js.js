window.onload = function(){

	var spans_menu = document.getElementsByTagName("span");
	for (let i = 0; i < spans_menu.length; i++){
	spans_menu[i].addEventListener("mouseover", mouseSobre);
	spans_menu[i].addEventListener("mouseout", mouseFora);
	}

	function tudoFora(){
		document.getElementById('parag1').style.display = 'none';
		document.getElementById('parag2').style.display = 'none';
		document.getElementById('parag3').style.display = 'none';
		document.getElementById('parag4').style.display = 'none';
		document.getElementById('corpo').style.display = 'block';
		document.getElementById('Dts30').style.display = 'none';
		document.getElementById('Dts40-1').style.display = 'none';
		document.getElementById('Dts40-2').style.display = 'none';
		document.getElementById('Dec50-1').style.display = 'none';
		document.getElementById('Dec60-1-1').style.display = 'none';
		document.getElementById('fontes').style.display = 'none';
		document.getElementById('BANNER2').style.display = 'none';
	};
	
	tudoFora();

	document.getElementById("m1").addEventListener("click", function(){
		tudoFora();
		document.getElementById("parag1").style.display = "block";
		document.getElementById("parag2").style.display = "none";
		document.getElementById("parag3").style.display = "none";
		document.getElementById("parag4").style.display = "none";
		document.getElementById("corpo").style.display = "none";
	});

	document.getElementById("m2").addEventListener("click", function(){
		tudoFora();
		document.getElementById("parag1").style.display = "none";
		document.getElementById("parag2").style.display = "block";
		document.getElementById("parag3").style.display = "none";
		document.getElementById("parag4").style.display = "none";
		document.getElementById("corpo").style.display = "none";
	});

	document.getElementById("m3").addEventListener("click", function(){
		tudoFora();
		document.getElementById("parag1").style.display = "none";
		document.getElementById("parag2").style.display = "none";
		document.getElementById("parag3").style.display = "block";
		document.getElementById("parag4").style.display = "none";
		document.getElementById("corpo").style.display = "none";
	});

	document.getElementById("m4").addEventListener("click", function(){
		tudoFora();
		document.getElementById("parag1").style.display = "none";
		document.getElementById("parag2").style.display = "none";
		document.getElementById("parag3").style.display = "none";
		document.getElementById("parag4").style.display = "block";
		document.getElementById("corpo").style.display = "none";
	});

	document.getElementById("m5").addEventListener("click", function(){
		tudoFora();
		document.getElementById("parag1").style.display = "block";
		document.getElementById("parag2").style.display = "block";
		document.getElementById("parag3").style.display = "block";
		document.getElementById("parag4").style.display = "block";
		document.getElementById("corpo").style.display = "block";
		document.getElementById('fontes').style.display = 'block';
	});

	document.getElementById("m0").addEventListener("click", function(){
		tudoFora();
		document.getElementById("parag1").style.display = "none";
		document.getElementById("parag2").style.display = "none";
		document.getElementById("parag3").style.display = "none";
		document.getElementById("parag4").style.display = "none";
		document.getElementById("corpo").style.display = "block";
	});

	document.getElementById("dec30").addEventListener("click", function(){
		document.getElementById("Dts30").style.display = 'block';
	});

	document.getElementById("dec40").addEventListener("click", function(){
		document.getElementById("Dts40-1").style.display = 'block';
		document.getElementById("Dts40-2").style.display = 'block';
	});

	document.getElementById('dec50').addEventListener('click', function(){
	document.getElementById('Dec50-1').style.display = 'block';
	});

	document.getElementById('dec60').addEventListener('click', function(){
		document.getElementById('Dec60-1-1').style.display = 'block';
	})

	document.getElementById("Dts30").addEventListener("click", function(){
		alert("Datsun 1930.");
	});

	document.getElementById("Dts40-1").addEventListener('click', function(){
		alert('Toyota SA 1947.');
	});

	document.getElementById('Dts40-2').addEventListener('click', function(){
		alert('Datsun DA 1947.');
	});

	document.getElementById('Dec50-1').addEventListener('click', function(){
		alert('Toyopet Crown 1957, o Primeiro carro Japonês exportado para os EUA.');
	});

	document.getElementById('Dec60-1').addEventListener('click', function(){
		alert('Toyota Sports 800 1965, 800cc 2cilindros.');
	});

	document.getElementById('Dec60-1-1').addEventListener('click', function(){
		alert('Foto do primeiro Grand Prix no Japão, no novo autódromo de Suzuka.');
	});

	document.getElementById('tomica').addEventListener('click', function(){
		alert('Skyline R30 Silhouette Formula, Powered by Tomica.');
	});
	
	document.getElementById('civic3').addEventListener('click', function(){
		alert('Honda Civic 3° Geração RaceCar (1983 - 1987).');
	});
	
	document.getElementById('civic4').addEventListener('click', function(){
		alert('Honda Civic 4° Geração RaceCar (1988 - 1991).');
	});
	
	document.getElementById('GT-R-R33').addEventListener('click', function(){
		alert('Nissa Skyline GT-R R33, versão de rua.');
	});

	document.getElementById('dec90').addEventListener('click', function(){
		document.getElementById("BANNER2").style.display = 'block';
	});

	var intervalo = 2500;
    
    var indice = 1;

    setInterval(slide, intervalo);

    function slide(){
        document.getElementById("banner").src="imagens/BANNER/JDM"+indice+".jpg";
        indice = indice >= 5 ? 1 : indice + 1;
        console.log(indice);
    };

     function slide(){
        document.getElementById("banner2").src="imagens/BANNER2/JDM"+indice+".jpg";
        indice = indice >= 5 ? 1 : indice + 1;
        console.log(indice);
    };

	function mouseSobre(){
		this.className = "menu_selecionado";
		this.style.cursor = "pointer";
	}
	function mouseFora(){
		this.className = "menu_nao_selecionado";
	}
}