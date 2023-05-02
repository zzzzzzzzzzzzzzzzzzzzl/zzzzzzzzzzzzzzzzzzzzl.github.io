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
 
      </div>

          
      <div class="dropdown">
        <!-- games -->
        <button class="dropbtn">Projects</button>
        <div class="dropdown-content">
        <a href="${s}games/chess/html.html">Chess</a>
  
        </div>
      </div>
            <div class="dropdown">
                <!-- sprints -->
                <button class="dropbtn">Links</button>
                <div class="dropdown-content">
                <a href="https://www.linkedin.com/in/james-edwards-692a08273/">Linkedin</a>
                <a href="https://media.discordapp.net/attachments/1005760212302581772/1102834944893526076/image.png?width=504&height=701">CV</a>

                </div>
              </div>
</div>
</div>
</div>
</div>
`;
tar.innerHTML=html;