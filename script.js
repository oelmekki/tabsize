let tabsize = 2;

document.body.style.tabSize = tabsize;

// for github
Array.prototype.forEach.call( document.querySelectorAll( '[data-tab-size]' ), function( element ){
  element.style.tabSize = tabsize;
});
