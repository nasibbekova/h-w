
// Соединить два объекта в один 
// Из этого обьекта получить все ключи в новый массив 
// Из этого объекта также получить все значения тоже в новый массив 
// Эти два массива соединить в одно целое 
// И распределить их по типам данных

let types = {
    string :[],
    number : [],
    oject : [], 
boolean : []
    }
    
    let person = {
    name : 'Madina',
    surname : 'Nasibbekova',
    age : 16,
    gender : 'female',
    live: 'Uzbekistan',
    country: 'Samarkand' ,
    ascept: {
        heirColor : 'brown',
        eyeColor: 'brown',
        height: 161,
        width: 50,
    },
    passport :{
        serius: 'ABC',
        number: 546345463,
        date: 08052006,
    },
        study:{
        school: 35,
        additional: 'Wepro',
        twoAdditional: 'English'
    },
    fullName : function() {
        return this.name + '' + this.surname 
    }
}

    console.log (person.fullName()) 
    
    // 2
    let firstExercise = Object.keys (person)
    
    console.log (firstExercise)
    
    // 3
    let secondExersice = Object.values (person)
    
    console.log(secondExersice)
    
    // 4
    let one = Object.assign ({}, person.look)
    
    
    // 5
    switch (person.filter ) {
    case (typeof (item) === 'number'):
        types.number.push (person)
            break 
                case (types === 'boolean'):
        types.boolean.push(boolean)
            break
                case (types=== 'object'):
        types.object.push(object)
            break
                case (types==='string'):
        types.string.push( string)
        
}
