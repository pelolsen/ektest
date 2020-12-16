var array = [
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112998999", name: "Kasper Pedersen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2305524588", name: "Gertrud Mogensen"},
    {ssn: "0710855877", name: "Bertram Viktor Nielsen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112998999", name: "Kasper Pedersen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2305524588", name: "Gertrud Mogensen"},
    {ssn: "0710855877", name: "Bertram Viktor Nielsen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112998999", name: "Kasper Pedersen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2305524588", name: "Gertrud Mogensen"},
    {ssn: "0710855877", name: "Bertram Viktor Nielsen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112998999", name: "Kasper Pedersen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2305524588", name: "Gertrud Mogensen"},
    {ssn: "0710855877", name: "Bertram Viktor Nielsen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112998999", name: "Kasper Pedersen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2305524588", name: "Gertrud Mogensen"},
    {ssn: "0710855877", name: "Bertram Viktor Nielsen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112998999", name: "Kasper Pedersen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2305524588", name: "Gertrud Mogensen"},
    {ssn: "0710855877", name: "Bertram Viktor Nielsen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112998999", name: "Kasper Pedersen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2305524588", name: "Gertrud Mogensen"},
    {ssn: "0710855877", name: "Bertram Viktor Nielsen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"}
];

function fjernDuplikater(arr){
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i]['ssn'] == arr[j]['ssn'] && arr[i]['name']== arr[j]['name'] && i !=j){
                arr.splice(j,1)
                j=j-1
            }
        }
    }
    arr.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
        if (nameA < nameB) //sort string ascending
         return -1;
        if (nameA > nameB)
         return 1;
        return 0; //default return value (no sorting)
    });
    arr.sort(function(a, b) {        
        return (a.ssn[4]+ a.ssn[5]) - (b.ssn[4]+b.ssn[5]);
    });
    return arr
};
console.log(fjernDuplikater(array));
