//buscando uma lista de uma array usando for 
let msg= document.getElementById('msg')

const usuarios=[
    {nome:"Huginho", idade:18},
    {nome:"Belo", idade:19},
    {nome:"Naudo", idade: 20},
];

const Users = usuarios.length;

for (let i=0; i<Users; i++){
    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

var imagens=[
    'img/1.png',
    'img/2.jpg',
    'img/3.jpg',
]

//declara vaariaveis
var Index =0;
var time =1000;

//criando uma função
function slideShow(){
    document.getElementById('image').src =imagens[Index];
    Index++;
    if(Index == imagens.length){Index=0;}
    setTimeout("slideShow()", time);
}

slideShow();