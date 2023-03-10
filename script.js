console.log("Welcome");
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let Progress=document.getElementById('progress');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
var count=0;

let songs=[
    {songName:"Apna Bana Le", filePath:"song/1.mp3",coverPath:"covers/cover1.jpeg"},
    {songName:"Strawberries and Cigarettes", filePath:"song/2.mp3",coverPath:"covers/cover2.png"},
    {songName:"She's all I wanna be", filePath:"song/3.mp3",coverPath:"covers/cover3.jpg"},
    {songName:"Saware", filePath:"song/4.mp3",coverPath:"covers/cover4.jpeg"},
    {songName:"Feel Me", filePath:"song/5.mp3",coverPath:"covers/cover5.png"},
    {songName:"On My Way", filePath:"song/6.mp3",coverPath:"covers/cover6.jpeg"},
    {songName:"The Nights", filePath:"song/7.mp3",coverPath:"covers/cover7.jpeg"},
    {songName:"Back To You", filePath:"song/8.mp3",coverPath:"covers/cover8.jpeg"},
    {songName:"Bilionera", filePath:"song/9.mp3",coverPath:"covers/cover9.jpeg"},
    {songName:"Stay", filePath:"song/10.mp3",coverPath:"covers/cover10.jpeg"},
]
songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

       
    }else{
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        
    }
})
 audioElement.addEventListener('timeupdate',()=>{
    // console.log('TimeUpdate');
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    //Updating bar
     Progress.value=progress; 
})
Progress.addEventListener('change',()=>{
    audioElement.currentTime=Progress.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
    })
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
 element.addEventListener('click',(e)=>{
     console.log(e.target);
     makeAllPlays();
     
     songIndex=parseInt(e.target.id);
     e.target.classList.remove('fa-circle-play');
     e.target.classList.add('fa-circle-pause');
     
     audioElement.src= `song/${songIndex+1}.mp3`;
     masterSongName.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
     
 })
 })

   document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
     songIndex=0;
    }else{
     songIndex-=1;
    }
    audioElement.src= `song/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
   })
   document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
     songIndex=0;
    }else{
     songIndex+=1;
    }
    audioElement.src= `song/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');

   })