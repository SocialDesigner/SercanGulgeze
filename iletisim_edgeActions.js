/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${sitepiton2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.pitonbilgisayar.com", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sitesercan}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.sercangulgeze.com", "_blank");
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${home}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("index.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${geri_ok}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("index.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${harita}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://www.google.com/maps?f=q&source=embed&hl=tr&geocode&q=Ya%C5%9Far+%C3%9Cniversitesi,+Sel%C3%A7uk+Ya%C5%9Far+Kamp%C3%BCs%C3%BC,+%C3%9Cniversite+Cad.+A%C4%9Fa%C3%A7l%C4%B1+Yol,+Bornova+Merkez/%C4%B0zmir,+T%C3%BCrkiye&aq=0&oq=ya%C5%9Far&sll=38.417675,27.079717&sspn=0.482574,1.056747&ie=UTF8&hq=Ya%C5%9Far+%C3%9Cniversitesi,+Sel%C3%A7uk+Ya%C5%9Far+Kamp%C3%BCs%C3%BC,+%C3%9Cniversite+Cad.+A%C4%9Fa%C3%A7l%C4%B1+Yol,+Bornova+Merkez/%C4%B0zmir,+T%C3%BCrkiye&ll=38.45438,27.202546&spn=0.006295,0.006295&t=m", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-5742815");