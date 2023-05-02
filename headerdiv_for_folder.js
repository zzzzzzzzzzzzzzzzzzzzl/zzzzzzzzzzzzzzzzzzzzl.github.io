const tar=document.getElementById('tememe');
const index=document.getElementById('index');
var s='../';
if (index){
s=''
}


var html=`<div class="header">
<div class="links">
    <a href="${s}index.HTML">home</a>
         
</div>


</div class="dropdown-row">
<div class="dropdown-background">
<div class="dropdown">
    




              <div class="dropdown">
                <!-- games -->
                <button class="dropbtn">projects</button>
                <div class="dropdown-content">
                <a href="${s}games/chess/html.html">Chess</a>
          

                </div>
              </div>

</div>
</div>
</div>
</div>

`;
tar.innerHTML=html;