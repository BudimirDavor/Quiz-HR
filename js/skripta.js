
function provjeri() 
{
	var pitanje01 = document.kviz.pitanje01.value;
	var pitanje02 = document.kviz.pitanje02.value;
	var pitanje03 = document.kviz.pitanje03.value;
	var pitanje04 = document.kviz.pitanje04.value;
	var pitanje05 = document.kviz.pitanje05.value;
	var pitanje06 = document.kviz.pitanje06.value;
	var pitanje07 = document.kviz.pitanje07.value;
	var pitanje08 = document.kviz.pitanje08.value;
	var pitanje09 = document.kviz.pitanje09.value;
	var pitanje10 = document.kviz.pitanje10.value;
	var pitanje11 = document.kviz.pitanje11.value;
	var pitanje12 = document.kviz.pitanje12.value;
	var pitanje13 = document.kviz.pitanje13.value;
	var pitanje14 = document.kviz.pitanje14.value;
	var pitanje15 = document.kviz.pitanje15.value;
	var pitanje16 = document.kviz.pitanje16.value;
	var pitanje17 = document.kviz.pitanje17.value;
	var pitanje18 = document.kviz.pitanje18.value;
	var pitanje19 = document.kviz.pitanje19.value;
	var pitanje20 = document.kviz.pitanje20.value;
	
	var rezultat = 0;
	
	if (pitanje01 == "c") {
		rezultat++;	
	}
	
	if (pitanje02 == "b") {
		rezultat++;	
	}
	
	if (pitanje03 == "d") {
		rezultat++;	
	}
	if (pitanje04 == "d") {
		rezultat++;	
	}
	if (pitanje05 == "b") {
		rezultat++;	
	}
	if (pitanje06 == "b") {
		rezultat++;	
	}
	if (pitanje07 == "a") {
		rezultat++;		
	}
	if (pitanje08 == "c") {	
		rezultat++;		
	}
	if (pitanje09 == "c") {	
		rezultat++;		
	}
	if (pitanje10 == "d") {	
		rezultat++;		
	}
	if (pitanje11 == "b") {
		rezultat++;	
	}
	if (pitanje12 == "d") {
		rezultat++;	
	}
	if (pitanje13 == "c") {
		rezultat++;	
	}
	if (pitanje14 == "c") {
		rezultat++;	
	}
	if (pitanje15 == "d") {
		rezultat++;	
	}
	if (pitanje16 == "d") {
		rezultat++;	
	}
	if (pitanje17 == "c") {
		rezultat++;	
	}
	if (pitanje18 == "b") {
		rezultat++;	
	}
	if (pitanje19 == "d") {
		rezultat++;	
	}
	if (pitanje20 == "c") {	
		rezultat++;		
	}
		
	document.getElementById("brojtocnih").innerHTML = "Imaš " + rezultat + " točnih odgovora: " + rezultat*5 + "%" + " ,a minimum 95% je prolaz";
		
}
