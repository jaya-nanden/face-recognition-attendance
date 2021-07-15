var readButton = document.getElementById('read-data');
readButton.addEventListener('click', () => {
    // https://face-authen-api.herokuapp.com/read
    // http://127.0.0.1:5000/read
    fetch('https://face-authen-api.herokuapp.com/read', {
        method: 'POST',
        // body: JSON.stringify({
        //     rollno: roll_no.value,
        //     imgbase64: i
        // }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        JSC.Chart('chartDiv', {
            type: 'vertical column',
            series: [
               {
                  points: [
                    {x: 'Happy', y: data['Happy']},
                    {x: 'Sad', y: data['Sad']},
                    {x: 'Neutral', y: data['Neutral'] + data['IDK']},
                    {x: 'Surprised', y: data['Surprised']},
                    {x: 'Fearful', y: data['Fearful']},
                    {x: 'Angry', y: data['Angry']},
                    {x: 'Disgusted', y: data['Disgusted']},
                    // {x: 'Uncategoried', y: data['IDK']}
                  ]
               }
            ]
         });

        console.log(data);
    }).catch(function (error) {
        console.warn('Something went wrong...', error);
    });
    
});