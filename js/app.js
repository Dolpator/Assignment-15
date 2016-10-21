console.log('wired up!')
console.log($)

var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}



var legislatorContainer = document.querySelector('.leg-data');

var legData = function(returnData){
   console.log(returnData)

forEach(returnData.results, function(legObj){
   //console.log(legObj)
var legStr  ='<div class = "col-sm-6 col-md-4">'
    legStr +=   '<div class = "thumbnail">'
    legStr +=         '<h2>' + legObj.first_name +' ' + legObj.last_name + '</h2>'
    legStr +=         '<h4>' + legObj.title + '--' + legObj.party + '-' + legObj.state_name + '</h4>'
    legStr +=           '<ul>'
    legStr +=              '<li>' + 'email: ' +legObj.oc_mail + '</li>'
    legStr +=              '<li>' + 'website: ' +legObj.website + '</li>'
    legStr +=              '<li>' + 'facebook: ' +legObj.facebook_id + '</li>'
    legStr +=              '<li>' + 'twitter: ' +legObj.twitter_id + '</li>'
    legStr +=           '</ul>'
    legStr +=         '<h6>' + 'Term End '+legObj.term_end + '</h6>'
    legStr +=    '</div>'
    legStr += '</div>'


    legislatorContainer.innerHTML += legStr;
    })
}

$.getJSON('http://congress.api.sunlightfoundation.com/legislators?apikey=348a9f2dfe12419ea64eaad9b7fce6a0').then(legData)


var zipInput = document.querySelector('.input-value');
var zipData = function(returnData){
   console.log(returnData)
forEach(returnData.results, function(zipObj){
   console.log(zipObj.state)
})

}

var keyInput = function(evt){
         if(evt.keyCode === 13){
            console.log(evt.target.value)
            var zipInputEl = evt.target.value;
            if(zipInputEl === zipInput){
               console.log(zipInputEl)
            }
         }
   }
      legislatorContainer.innerHTML;
      zipInput.addEventListener('keydown', keyInput)

$.getJSON('https://congress.api.sunlightfoundation.com/districts/locate?zip='+ zipInput +'&apikey=348a9f2dfe12419ea64eaad9b7fce6a0').then(zipData)
