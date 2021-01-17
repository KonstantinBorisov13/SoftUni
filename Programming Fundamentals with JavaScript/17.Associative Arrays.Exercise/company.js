function work(input) {
    let companies = {};
    for (let line of input) {
        let [company, id] = line.split(' -> ');
        if(!companies.hasOwnProperty(company)) {
        companies[company] = new Set();
        }
        companies[company].add(id)
        
    }
    let sorted = Object.entries(companies);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));
    for (let element of sorted) {
        console.log(element[0]);
        for(let number of element[1]) {
            console.log(`-- ${number}`);
        }
        
    }

}

work([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)