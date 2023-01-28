
let res=document.getElementById("image");

let i=0;
function imgchange(){
    
        if(i==1) res.src="https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
        else if(i==2) res.src="https://images.unsplash.com/photo-1572590285030-0ae6a4715671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
        else if(i==3) res.src="https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
        else if(i%5==0) res.src="https://media.istockphoto.com/id/1449377404/photo/funny-beautiful-cute-one-eyed-forest-colorcat-hiding-on-the-sofa-christmas.jpg?s=612x612&w=0&k=20&c=1keyaT9uxfvaO6KCFc-ngEVGbSBsbUg9E7JutJZTlz8=";
        else res.src="https://media.istockphoto.com/id/1362349752/photo/little-gray-cat-in-red-santa-claus-dress-lying-close-up-of-a-kitten-lying-on-gray-fur-pet.jpg?s=612x612&w=is&k=20&c=mSRLKFPPlPbmyFWzp4dh1r2xptiek7I1SAerDFS8Ixw=";
    i++;
}


let palyer1=document.getElementsByTagName("h2")[0];
let palyer2=document.getElementsByTagName("h2")[1];

let result1=0;

function fun1(){
    result1=Math.ceil(Math.random()*6);
    palyer1.innerText=result1;
    console.log(result1);
}
let result2=0;

function fun2(){
    result2=Math.ceil(Math.random()*6);
    palyer2.innerText=result2;
    console.log(result1 +"" +result2);
    let temp=document.getElementById("result");

    if(result1==result2) temp.innerText="Draw";
    else if (result1>result2) temp.innerText="Player1 wins";
    else temp.innerText="Player2 wins";
}