function scrollFunction(){
    if (document.body.scrollTop > 80 ||
        document.documentElement.scrollTop >80){
        document.getElementById("navbar").style.padding = "0"; 
        document.getElementById("navbar").style.background = "white"; 
        document.getElementById("header-img").style.height = "25px";    
    } else {
        document.getElementById("navbar").style.padding = "30px 0";  
        document.getElementById("navbar").style.background = "white"; 
        document.getElementById("header-img").style.height = "100px";
    }
}

function scrollFunction_Mobile(){
    if (document.body.scrollTop > 80 ||
        document.documentElement.scrollTop >80){
        document.getElementById("navbar").style.padding = "0"; 
        document.getElementById("navbar").style.background = "white"; 
        document.getElementById("header-img").style.height = "5%";    
    } else {
        document.getElementById("navbar").style.padding = "10px 0";  
        document.getElementById("navbar").style.background = "white"; 
        document.getElementById("header-img").style.height = "10%";
    }
}

let get_involved = document.getElementById('get-involved');
let donate = document.getElementById('donate');
let donate_h1 = document.getElementById('donate-h1');
let donate_content = document.getElementById('donate-content');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let status_donate = 1;

let partner = document.getElementById('partner');
let partner_h1 = document.getElementById('partner-h1');
let partner_content = document.getElementById('partner-content');
let status_partner = 1;

var x = window.matchMedia("(max-width: 650px)")

function myMediaQuery(x) {
    if (x.matches) {
        window.onscroll = function() {scrollFunction_Mobile();}

        donate.onclick = function (){
            if (status_donate == 1) {
                donate.style.transition = '0.4s'
                donate.style.height = '90%';
                donate_content.style.transform = 'translateY(0%)';
                donate_content.style.color = 'black';
                donate_h1.style.transform = 'translateY(-210%)';
                donate_h1.style.color = 'transparent';
                donate_h1.style.top = '0';
                one.style.color = 'rgb(4, 44, 51)';
                two.style.color = 'rgb(4, 44, 51)';
                three.style.color = 'rgb(4, 44, 51)';
                four.style.color = 'rgb(4, 44, 51)';
                status_donate = 2;
        
                partner.style.height = '50px';
                partner_content.style.transform = 'translateY(110%)';
                partner_content.style.color = 'transparent';
                partner_h1.style.transform = 'translateY(0%)';
                partner_h1.style.transform = 'translateY(0%)';
                partner_h1.style.color = 'black';
                partner_h1.style.top = 'auto';    
                status_partner = 1;
            } else if (status_donate == 2) {
                donate.style.height = '50px';
                donate_content.style.transform = 'translateY(110%)';
                donate_content.style.color = 'transparent';
                donate_h1.style.transform = 'translateY(0%)';
                donate_h1.style.transform = 'translateY(0%)';
                donate_h1.style.color = 'black';
                donate_h1.style.top = 'auto';    
                one.style.color = 'transparent';
                two.style.color = 'transparent';
                three.style.color = 'transparent';  
                four.style.color = 'transparent';
                status_donate = 1;
            }
        }    

        partner.onclick = function (){
            if (status_partner == 1) {
                partner.style.transition = '0.4s'
                partner.style.height = '80%';
                partner_content.style.transform = 'translateY(0%)';
                partner_content.style.color = 'black';
                partner_h1.style.transform = 'translateY(-210%)';
                partner_h1.style.color = 'transparent';
                partner_h1.style.top = '0';
                status_partner = 2;
        
                donate.style.height = '50px';
                donate_content.style.transform = 'translateY(110%)';
                donate_content.style.color = 'transparent';
                donate_h1.style.transform = 'translateY(0%)';
                donate_h1.style.transform = 'translateY(0%)';
                donate_h1.style.color = 'black';
                donate_h1.style.top = 'auto';
                one.style.color = 'transparent';
                two.style.color = 'transparent';
                three.style.color = 'transparent';
                four.style.color = 'transparent';    
                status_donate = 1;        
            } else if (status_partner == 2) {
                partner.style.height = '50px';
                partner_content.style.transform = 'translateY(110%)';
                partner_content.style.color = 'transparent';
                partner_h1.style.transform = 'translateY(0%)';
                partner_h1.style.transform = 'translateY(0%)';
                partner_h1.style.color = 'black';
                partner_h1.style.top = 'auto';    
                status_partner = 1;
            }
        }  
        
    } else {
        window.onscroll = function() {scrollFunction();}

        donate.onclick = function (){
            if (status_donate == 1) {
                donate.style.transition = '0.4s'
                donate.style.height = '60%';
                donate_content.style.transform = 'translateY(0%)';
                donate_content.style.color = 'black';
                donate_h1.style.transform = 'translateY(-210%)';
                donate_h1.style.color = 'transparent';
                donate_h1.style.top = '0';
                one.style.color = 'rgb(4, 44, 51)';
                two.style.color = 'rgb(4, 44, 51)';
                three.style.color = 'rgb(4, 44, 51)';
                four.style.color = 'rgb(4, 44, 51)';
                status_donate = 2;
        
                partner.style.height = '50px';
                partner_content.style.transform = 'translateY(110%)';
                partner_content.style.color = 'transparent';
                partner_h1.style.transform = 'translateY(0%)';
                partner_h1.style.transform = 'translateY(0%)';
                partner_h1.style.color = 'black';
                partner_h1.style.top = 'auto';    
                status_partner = 1;
            } else if (status_donate == 2) {
                donate.style.height = '50px';
                donate_content.style.transform = 'translateY(110%)';
                donate_content.style.color = 'transparent';
                donate_h1.style.transform = 'translateY(0%)';
                donate_h1.style.transform = 'translateY(0%)';
                donate_h1.style.color = 'black';
                donate_h1.style.top = 'auto';    
                one.style.color = 'transparent';
                two.style.color = 'transparent';
                three.style.color = 'transparent';  
                four.style.color = 'transparent';
                status_donate = 1;
            }
        }    

        partner.onclick = function (){
            if (status_partner == 1) {
                partner.style.transition = '0.4s'
                partner.style.height = '60%';
                partner_content.style.transform = 'translateY(0%)';
                partner_content.style.color = 'black';
                partner_h1.style.transform = 'translateY(-210%)';
                partner_h1.style.color = 'transparent';
                partner_h1.style.top = '0';
                status_partner = 2;
        
                donate.style.height = '50px';
                donate_content.style.transform = 'translateY(110%)';
                donate_content.style.color = 'transparent';
                donate_h1.style.transform = 'translateY(0%)';
                donate_h1.style.transform = 'translateY(0%)';
                donate_h1.style.color = 'black';
                donate_h1.style.top = 'auto';
                one.style.color = 'transparent';
                two.style.color = 'transparent';
                three.style.color = 'transparent';
                four.style.color = 'transparent';    
                status_donate = 1;        
            } else if (status_partner == 2) {
                partner.style.height = '50px';
                partner_content.style.transform = 'translateY(110%)';
                partner_content.style.color = 'transparent';
                partner_h1.style.transform = 'translateY(0%)';
                partner_h1.style.transform = 'translateY(0%)';
                partner_h1.style.color = 'black';
                partner_h1.style.top = 'auto';    
                status_partner = 1;
            }
        }  

    }
}

myMediaQuery(x);

x.addEventListener("change", function() {
    myMediaQuery(x);
});









