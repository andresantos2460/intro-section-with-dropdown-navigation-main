const toogle_btn = document.getElementById('button-features');
const dropDownMenu_features = document.getElementById('drop-features');
const arrow_feature = document.getElementById('arrow-feature');

toogle_btn.onclick = function () {
  dropDownMenu_features.classList.toggle('open');
  arrow_feature.classList.toggle('open-arrow');
}
const toogle_btn_company = document.getElementById('button-company');
const dropDownMenu_company = document.getElementById('drop-company');
const arrow_company = document.getElementById('arrow-company');

toogle_btn_company.onclick = function () {
  dropDownMenu_company.classList.toggle('open');
  arrow_company.classList.toggle('open-arrow');
}

const nav_button=document.getElementById('icon-open');
const nav_close=document.getElementById('icon-close');
const nav_mobile=document.getElementById('navbar-list');
const body=document.getElementById('body');
nav_button.onclick= function(){
  nav_mobile.classList.toggle('nav-open')
  nav_button.classList.toggle('none')
  nav_close.classList.toggle('block')
  body.classList.toggle('open-body')
}

nav_close.onclick= function(){
  nav_mobile.classList.remove('nav-open')
  nav_button.classList.remove('none')
  nav_close.classList.remove('block')
  body.classList.remove('open-body')
}
