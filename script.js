$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)
        $.get('http://api.openweathermap.org/data/2.5/weather?q='+$('input').val()+'&APPID=ff253a1779de12ff5936f745c88a7691',function(res){
            $('.city').html('<h1>'+res.name+'</h1>')
            var temp_f = Math.trunc((res.main.temp)*9/5-459.67)
            console.log(temp_f);
            $('.temp').html('<p>The current temperature is '+temp_f+' degrees F.</p>')
            console.log(res);
    	}, 'json');
        // don't forget to return false so the page doesn't refresh
        return false; 
    });
});