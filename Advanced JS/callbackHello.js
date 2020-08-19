// window.onload = function(){
         
//     $.ajax({
//           type: 'GET',
//           url: 'data/greeting.json',
//           success: function(data){
//               console.log(data)
//           },
//           error: function(jqXHR, errorText, error){
//               console.log(errorText, error)
//           }
//     });
// }

window.onload = function(){
    let countries =[];
    let capitals  =[];
         
   
    $.ajax({
          type: 'GET',
          url: 'data/greeting.json',
          success: function(greeting){
              console.log(greeting.message);
              $.ajax({
                  type:'GET',
                  url: 'data/countries.json',
                  success: function(data){
                    countries = [...data.countries];
                    console.log(countries);
                    $.ajax({
                        type:'GET',
                        url: 'data/capitals.json',
                        success: function(data){
                        capitals = [...data.capitals];
                        console.log(capitals);
                        },
                        error: function(jqXHR, errorText, error){
                            console.log(jqXHR,errorText, error);
                        }
                    })
                  },
                  error: function(jqXHR, errorText, error){
                    console.log(jqXHR,errorText, error);
                }
              })
          },
          error: function(jqXHR, errorText, error){
              console.log(jqXHR,errorText, error);
          }
    });
}



// $.ajax({
//     type: 'GET',
//     url: 'data/greeting.json',
//     success: fetchGreeting,
//     error:  handleError
// });

// function fetchGreeting(){

// }

// function fetchCountries(){

// }

// function fetchCapitals(){

// }

// function handleError(){

// }
