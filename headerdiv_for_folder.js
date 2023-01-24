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
    


        <!-- tech -->
        <button class="dropbtn">Tech</button> 
        <div class="dropdown-content">
        </div>
      </div>

        <div class="dropdown">
            <!-- core -->
            <button class="dropbtn">Core</button>
            <div class="dropdown-content">
              <a href="${s}core/1.html">The Story of Te Houtaewa</a>
              <a href="${s}core/2.html">Learning plan</a>
              <a href="${s}core/3.html">Values</a>
            </div>
          </div>
          
            <div class="dropdown">
                <!-- sprints -->
                <button class="dropbtn">Sprints</button>
                <div class="dropdown-content">

                </div>
              </div>

</div>
</div>
</div>
</div>

`;
tar.innerHTML=html;