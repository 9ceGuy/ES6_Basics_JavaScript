

 let groupOfPeople1 = () =>{
    const name1 = "Chris";
    const name2 = "Elvis";
    const name3 = "Stephen";
    const name4 = "Anthony";
    const name5 = "Ibiye";
    
    return [name1, name2, name3, name4, name5];
}

let groupOfPeople2 = () =>{
    const name6 = "Chris1";
    const name7 = "Elvis1";
    const name8 = "Stephen1";
    const name9 = "Anthony1";
    const name10 = "Ibiye1";
    
    return [name6, name7, name8, name9, name10];
}

const groupOfPeople = [...groupOfPeople1(), ...groupOfPeople2()];

// console.log(groupOfPeople);

export default groupOfPeople;