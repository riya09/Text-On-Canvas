var bgcolor=document.getElementById('bg-color');
var colors=['crimson','skyblue','orange','lightgreen','pink','tomato','black'];
var fonts=['Times New Roman','Arial','Broadway','Magneto','Impact','Cooper Black'];
for(var i=0;i<colors.length;i++){
	var opt=document.createElement('option');
	opt.value=colors[i];
	opt.innerHTML=colors[i];
	bgcolor.appendChild(opt);
}
var fonts_opt=document.getElementById('font_type');
for(var i=0;i<fonts.length;i++){
		var opt=document.createElement('option');
    opt.value=fonts[i];
    opt.innerHTML=fonts[i];
    fonts_opt.appendChild(opt);
}

var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');
ctx.fillStyle = "crimson";
ctx.fillRect(0,0,canvas.width,canvas.height);

var name_place=document.getElementById('name1');

//program to write text on canvas
var generate_name=function(){
	var name=document.getElementById('name').value;
	var font_number=fonts_opt.selectedIndex;
	ctx.font='30px  '+fonts_opt.options[font_number].value;
	var x=canvas.width/3;
	var y=50;
	var next=0;
	var lineheight=30;
	var word=name.split(" ");
	for(var i=0;i<word.length;i++){
		var message=word[i]+' ';
		var w=ctx.measureText(message).width;
		if(x+w>=canvas.width-20){
			next++;
			x=10;
		}
		ctx.fillStyle='white';
		ctx.fillText(message,x,y+(next*lineheight));
		x=x+w;
		}
	}

name_place.addEventListener('click',function(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	change_bgcolor();
	generate_name();
});

//Program to change the size of the canvas
var cover_size=function(){
	var sizes=[[500,400],[400,400],[600,300]];
	var select = document.getElementById("canvas_size").selectedIndex;
	canvas.width=sizes[select][0];
	canvas.height=sizes[select][1];
	change_bgcolor();
	generate_name();
}

//program to change brackground color
function change_bgcolor(){
	var color_number=bgcolor.selectedIndex;
	ctx.fillStyle=bgcolor.options[color_number].value;
	ctx.fillRect(0,0,canvas.width,canvas.height);
	generate_name();
}
