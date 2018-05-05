function yourBirthday(day1, day2){
    if(day1 && day2 === 5 || day1 && day2 === 31){
        console.log("How did you know?");
        }
        else {
            console.log("Just another day...")
        }
}

yourBirthday(5,31);
yourBirthday(31,5);
yourBirthday(1,2);

//my birthday is 5/31, so either 5 or 31 would work for either argument.