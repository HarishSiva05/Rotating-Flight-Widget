const tablebody = document.getElementById('t-body')

let flights = [
    {
        time: "10:00",
        destination: 'LAX',
        flights:'BJ 007',
        gate:"A 12",
        remarks:'SCHEDULED'
       
    },
    {
        time: "12:00",
        destination: 'ABU',
        flights:'BJ 0R7',
        gate:"A 12",
        remarks:'DELAYED'
        
    },
    {
        time: "1:00",
        destination: 'SDI',
        flights:'BJ 007',
        gate:"A 12",
        remarks:'SCHEDULED'
       
    },
    {
        time: "09:00",
        destination: 'MJI',
        flights:'BJ 007',
        gate:"A 12",
        remarks:'SCHEDULED'
        
    },
]
function population(){
    for(const flight of flights){
        const tablerow = document.createElement("tr")

        for(flightDetail in flight){
            const tablecell = document.createElement("td")
            const word = Array.from(flight[flightDetail])

            for(const letter of word){
                const letterElement = document.createElement("div")
                letterElement.classList.add("flip")
                letterElement.textContent = letter
                tablecell.append(letterElement)
            }
            //console.log('flightDetail',flightDetail)
            //tablecell.innerText=flight[flightDetail]
            tablerow.append(tablecell)
        }
        tablebody.append(tablerow)
    }
}
population()