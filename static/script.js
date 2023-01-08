//Loads React into html file
class importReact extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
      `;
    }

}
customElements.define('import-react', importReact);


//Loads Header into html file 
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>            
            {*Header code goes here *}         
        </nav>
        `;
    }
}
customElements.define('main-header', Header);


class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
        <footer>            
            {*footer code goes here *}         
        </footer>     
        `;
    }
}
customElements.define('main-footer', Footer);

  
