class WhatsAppController {

    constructor() {
        console.log('WhatsAppController OK');

        this.elementsPrototype();
        this.loadElements();
        this.initEvents();

    }

    loadElements() {

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;

        });
    }

    //Cria os prototypes para todos os elementos do contexto
    elementsPrototype() {

        Element.prototype.hide = function () {
            //esse this relaciona ao escolo da função, não da classe.
            this.style.display = 'none';
            return this;
        }
        Element.prototype.show = function () {
            //esse this relaciona ao escolo da função, não da classe.
            this.style.display = 'block';
            return this;
        }
        Element.prototype.toggle = function () {
            //esse this relaciona ao escolo da função, não da classe.
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }
        Element.prototype.on = function (events, fn) {
            //esse this relaciona ao escolo da função, não da classe.
            events.split(' ').forEach(event => {

                this.addEventListener(event, fn);
            });
            return this;
        }

        Element.prototype.css = function (styles) {

            for (let name in styles) {
                this.style[name] = styles[name];
            }
            return this;
        }
        Element.prototype.addClass = function (name) {
            //esse this relaciona ao escolo da função, não da classe.
            this.classList.add(name);
            return this;
        }

        Element.prototype.removeClass = function (name) {
            //esse this relaciona ao escolo da função, não da classe.
            this.classList.remove(name);
            return this;
        }

        Element.prototype.toggleClass = function (name) {
            //esse this relaciona ao escolo da função, não da classe.
            this.classList.toggle(name);
            return this;
        }

        Element.prototype.hasClass = function (name) {
            //esse this relaciona ao escolo da função, não da classe.
            return this.classList.contains(name);
        }
    }

    initEvents() {

        this.el.myPhoto.on('click', e => {

            this.closeAllLeftPanel();
            this.el.panelEditProfile.show();
            //delay para dar tempo do transition fazer o efeito deslizante.
            setTimeout(() => {
                this.el.panelEditProfile.addClass('open');
            }, 25);
        });

        this.el.btnClosePanelEditProfile.on('click', e => {

            this.el.panelEditProfile.removeClass('open');
        });

        this.el.btnNewContact.on('click', e => {

            this.closeAllLeftPanel();
            this.el.panelAddContact.show();
            //delay para dar tempo do transition fazer o efeito deslizante.
            setTimeout(() => {
                this.el.panelAddContact.addClass('open');
            }, 25);
        });

        this.el.btnClosePanelAddContact.on('click', e => {

            this.el.panelAddContact.removeClass('open');
        });

        this.el.photoContainerEditProfile.on('click', e => {

            this.el.inputProfilePhoto.click();
        });

        this.el.inputNamePanelEditProfile.on('keypress', e => {

            if(e.key === 'Enter'){
                e.preventDefault();
                this.el.btnSavePanelEditProfile.click();        
            }
        });

        this.el.btnSavePanelEditProfile.on('click', e=>{

            console.log(this.el.inputNamePanelEditProfile.innerHTML);
        });

        this.el.formPanelAddContact.on('click', e => {

            
        });
    }

    closeAllLeftPanel() {

        this.el.panelEditProfile.hide();
        this.el.panelAddContact.hide();
    }
}