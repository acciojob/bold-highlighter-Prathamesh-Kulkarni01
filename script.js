function highlight() {
    //Write your code here
	const strongs=document.getElementsByTagName('strong')
	console.log( strongs)
	for(let i=0;i<strongs.length;i++){
		strongs[i].style.color="green"
	}


}


function return_normal() {
    //Write your code here

    const strongs=document.getElementsByTagName('strong')
	console.log( strongs)
	for(let i=0;i<strongs.length;i++){
		strongs[i].style.color="black"
	}

}
