(()=>{"use strict";const t={place_prompt:(t,e)=>{const{prompt:n}=t;console.log("Sending this prompt: "+n);const o=document.getElementById("prompt-textarea");o?o.value=n:console.error("Could not find the target textarea"),e({})}};chrome.runtime.onMessage.addListener((function(e,n,o){n.tab||e.name in t&&t[e.name](e.data,o)}))})();