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
        <a href="${s}tech/1.html">Inline vs Inline-block</a>
        <a href="${s}tech/2.html">HTML,CSS and JS</a>
        <a href="${s}tech/3.html">Code readability</a>
        <a href="${s}tech/4.html">Problem solving</a>
        </div>
      </div>

        <div class="dropdown">
            <!-- core -->
            <button class="dropbtn">Core</button>
            <div class="dropdown-content">
              <a href="${s}core/1.html">The Story of Te Houtaewa</a>
              <a href="${s}core/2.html">Learning plan</a>
              <a href="${s}core/3.html">Values</a>
              <a href="${s}core/4.html">Emotional Inteligence</a>
            </div>
          </div>
          
            <div class="dropdown">
                <!-- sprints -->
                <button class="dropbtn">Sprints</button>
                <div class="dropdown-content">
                <a href="${s}sprints/1.html">Week 1</a>
                <a href="${s}sprints/2.html">Week 2</a>
                <a href="${s}sprints/3.html">Week 3</a>
                <a href="${s}sprints/4.html">Week 4</a>

                </div>
              </div>


              <div class="dropdown">
                <!-- games -->
                <button class="dropbtn">lil games</button>
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