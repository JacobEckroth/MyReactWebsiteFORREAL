import React from 'react';
import "../css/footer.css"
function Footer(){
    return(
        <div id="footer">
            <p class="footerText">This website was made using <a rel="noreferrer" target="_blank" class="footerLink" href="https://reactjs.org/" title="React Webpage">React</a> </p>
            <img class="reactImage" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo"/>
            
            <p class="footerText">Copyright © {new Date().getFullYear()} Jacob Eckroth. All rights reserved.</p>
            
        </div>
    )
}

export default Footer;