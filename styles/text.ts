import * as css from "https://esm.sh/css@3.0.0";

export const textStyles = css.parse(`
@import url('https://fonts.googleapis.com/css?family=Titan+One');


.container{
  width:350px;
  height:300px;
  bottom:-10%;
  left:50%;
  transform:translate(-50%,-50%);
  display:block;
  position:absolute;
  text-align:center;
  }



.container:before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(-45deg, #45caff 0%, #ff1b6b 100% );
    transform: translate3d(0px, 0px, 0) scale(1);
    filter: blur(20px);
    opacity: var(0.7);
    transition: opacity 0.3s;
    border-radius: inherit;
}

/* 
* Prevents issues when the parent creates a 
* stacking context. (For example, using the transform
* property )
*/
.container::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
}
        
        

h1{
  background: #fff;
  border-radius: 25px;
  border:none;
  width:100%;
  height:100%;
  margin:0;
  padding:0;
  display:flex;
  font-family:'Titan One',cursive;
  font-size:90px;
  font-weight:700;
  flex-flow:row wrap;
  align-content:center;
  justify-content:center
  }

h1 span{width:100%;position:relative}

h1 span:before{
  background:linear-gradient(45deg,#fc5c7d,#6a82fb,#fc5c7d);
  width:100%;
  height:100%;
  display:block;
  position:absolute;
  content:'';
  mix-blend-mode:screen;
  }
.blobs_1{
  background:#ff1493;
  width:60px;
  height:60px;
  top:90px;
  left:210px;
  display:block;
  position:absolute;
  mix-blend-mode:color;animation:blobs 15s ease-in-out infinite alternate;
  }

.blobs_2{
  background:#ff4500;
  width:80px;
  height:80px;
  top:155px;
  left:230px
  display:block;
  position:absolute;
  mix-blend-mode:color;animation:blobs 15s ease-in-out infinite alternate;
  }

.blobs_3{
  background:#00ff00;
  width:60px;
  height:60px;
  top:145px;
  left:20px;
  display:block;
  position:absolute;
  mix-blend-mode:color;animation:blobs 15s ease-in-out infinite alternate;
  }

.blobs_4{
  background:#ff0000;
  width:100px;
  height:100px;
  top:115px;
  left:100px;
  display:block;
  position:absolute;
  mix-blend-mode:color;animation:blobs 15s ease-in-out infinite alternate;
  }

.blobs_5{
  background:#ffff00;
  width:50px;
  height:50px;
  top:55px;
  left:70px;
  display:block;
  position:absolute;
  mix-blend-mode:color;animation:blobs 15s ease-in-out infinite alternate;
  }

.blobs_6{
  background:#00ffff;
  width:60px;
  height:60px;
  top:220px;
  left:55px;
  display:block;
  position:absolute;
  mix-blend-mode:color;animation:blobs 15s ease-in-out infinite alternate;
  }

.blobs_7{
  background:#ff8c00;
  width:50px;
  height:50px;
  top:210px;
  left:180px;
  display:block;
  position:absolute;
  mix-blend-mode:color;animation:blobs 15s ease-in-out infinite alternate;
  }

@keyframes blobs{
  0%{border-radius:26% 74% 61% 39% / 54% 67% 33% 46%}
  10%{border-radius:74% 26% 47% 53% / 68% 46% 54% 32%}
  20%{border-radius:48% 52% 30% 70% / 27% 37% 63% 73%}
  30%{border-radius:73% 27% 57% 43% / 28% 67% 33% 72%}
  40%{border-radius:63% 37% 56% 44% / 25% 28% 72% 75%}
  50%{border-radius:39% 61% 70% 30% / 61% 29% 71% 39%}
  60%{border-radius:27% 73% 29% 71% / 73% 51% 49% 27%}
  70%{border-radius:39% 61% 65% 35% / 74% 65% 35% 26%}
  80%{border-radius:55% 45% 37% 63% / 38% 30% 70% 62%}
  90%{border-radius:25% 75% 70% 30% / 39% 50% 50% 61%}
  100%{border-radius:66% 34% 33% 67% / 65% 73% 27% 35%}
  }`)